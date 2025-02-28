<template>
  <ion-page>
    <Header class="header" />

    <ion-content>
      <div class="producto-container">
        <div v-if="producto" class="producto-grid">
          <div class="imagen-producto" :style="{ backgroundImage: `url(${producto.image})` }"></div>
          <div class="info-producto">
            <h2 class="titulo">{{ producto.name }}</h2>
            <p class="precio">{{ formatPrice(producto.price) }}</p>
            <p class="talla">Talla: {{ producto.size || 'M' }}</p>
            <div class="estrellas">
              <ion-icon
                v-for="star in 5"
                :key="star"
                :name="star <= producto.rating ? 'star' : 'star-outline'"
                class="rating-star"
              ></ion-icon>
              ({{ producto.rating }}/5)
            </div>

            <!-- Contador de cantidad -->
            <div class="cantidad-selector">
              <button class="btn-cantidad" @click="decreaseQuantity">-</button>
              <span class="cantidad">{{ quantity }}</span>
              <button class="btn-cantidad" @click="increaseQuantity">+</button>
            </div>

            <p class="descripcion">{{ producto.description }}</p>
          </div>
        </div>

        <!-- Sección de instrucciones de lavado y características -->
        <div v-if="producto" class="care-instructions">
          <h3>Instrucciones de Cuidado</h3>
          <div class="wash-icons">
            <span class="icon">🧼</span>
            <span class="icon">🌡️</span>
            <span class="icon">🧺</span>
            <span class="icon">🚫</span>
          </div>
          <h3>Características</h3>
          <ul class="features-list">
            <li v-for="(feature, index) in producto.features" :key="index">{{ feature }}</li>
          </ul>
        </div>

        <div v-else class="no-product">Producto no encontrado</div>

        <!-- Sección de comentarios -->
        <ComentProduct />

        <Productos class="containerProduct" />
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Productos from '@/components/Productos.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ComentProduct from '@/components/ComentProduct.vue';

export default {
  name: 'InfoProducto',
  components: {
    IonPage,
    IonContent,
    Header,
    Footer,
    ComentProduct,
    Productos,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const producto = ref(null);
    const quantity = ref(1);

    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
      }).format(price);
    };

    const increaseQuantity = () => {
      quantity.value++;
    };

    const decreaseQuantity = () => {
      if (quantity.value > 1) quantity.value--;
    };

    onMounted(async () => {
      try {
        const response = await import('@/assets/data/productos.json');
        const productos = response.default;
        producto.value = productos.find((item, index) => index === Number(props.id)) || null;

        // Si no hay características o descripción, asigna valores por defecto
        if (producto.value) {
          producto.value.description =
            producto.value.description || 'Producto de alta calidad para deportistas.';
          producto.value.features = producto.value.features || [
            'Suela de goma antideslizante',
            'Material transpirable',
            'Amortiguación de espuma',
            'Diseño ergonómico',
          ];
          producto.value.rating = producto.value.rating || 4.5;
          producto.value.size = producto.value.size || 'M';
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    });

    return {
      producto,
      quantity,
      formatPrice,
      increaseQuantity,
      decreaseQuantity,
    };
  },
};
</script>

<style scoped>
.producto-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.producto-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.imagen-producto {
  height: 400px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.imagen-producto:hover {
  transform: scale(1.02);
}

.info-producto {
  padding: 20px;
}

.titulo {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #000000;
}

.precio {
  font-size: 28px;
  font-weight: 600;
  color: #0056b3;
  margin: 0 0 15px 0;
}

.talla {
  font-size: 18px;
  color: #444444;
  margin: 0 0 15px 0;
}

.estrellas {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0056b3;
  font-size: 20px;
  margin-bottom: 20px;
}

.rating-star {
  font-size: 20px;
  color: #0056b3;
}

.descripcion {
  font-size: 16px;
  color: #444444;
  line-height: 1.6;
  margin: 20px 0;
}

.cantidad-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 25px 0;
}

.btn-cantidad {
  width: 40px;
  height: 40px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-cantidad:hover {
  background-color: #003f8a;
  transform: scale(1.05);
}

.cantidad {
  font-size: 20px;
  min-width: 40px;
  text-align: center;
  color: #000000;
}

.care-instructions {
  padding: 25px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin: 30px 0;
}

.care-instructions h3 {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 20px 0;
}

.wash-icons {
  display: flex;
  gap: 25px;
  margin-bottom: 25px;
  justify-content: center;
}

.wash-icons .icon {
  font-size: 32px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}

.features-list {
  list-style: none;
  padding: 0;
  font-size: 16px;
  color: #000000;
}

.features-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 30px;
  line-height: 1.5;
}

.features-list li:before {
  content: "•";
  color: #0056b3;
  font-size: 24px;
  position: absolute;
  left: 0;
  top: -2px;
}

.no-product {
  text-align: center;
  font-size: 1.5rem;
  color: #000000;
  padding: 2rem;
  font-weight: 600;
}

ion-content {
  --background: #ffffff;
}

@media (max-width: 768px) {
  .producto-grid {
    grid-template-columns: 1fr;
    padding: 15px;
  }

  .imagen-producto {
    height: 300px;
  }

  .titulo {
    font-size: 24px;
  }
  
  .precio {
    font-size: 22px;
  }
}
</style>