<template>
  <div class="camisas-container">
    <!-- Sección Izquierda: Slider de Camisas -->
    <div class="slider-section">
      <swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :navigation="true"
        :autoplay="{ delay: 5000 }"
        class="shirt-slider"
      >
        <swiper-slide
          v-for="(shirt, index) in shirts"
          :key="index"
          @click="selectShirt(shirt)"
        >
          <img :src="shirt.image" :alt="shirt.title" class="shirt-image" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Sección Derecha: Información de la Camisa -->
    <div class="info-section">
      <h2 class="shirt-title">{{ selectedShirt.title }}</h2>
      <p class="shirt-price">{{ selectedShirt.price }}</p>
      <p class="shirt-description">{{ selectedShirt.description }}</p>
      <div class="shirt-size">
        <label for="size-select" class="size-label">Talla:</label>
        <select id="size-select" v-model="selectedSize" class="size-dropdown">
          <option v-for="size in selectedShirt.sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <ion-button class="add-to-cart-button" @click="addToCart">
        Añadir al Carrito
      </ion-button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { IonButton } from '@ionic/vue';

export default {
  name: 'Camisas',
  components: {
    Swiper,
    SwiperSlide,
    IonButton,
  },
  setup() {
    const modules = [Pagination, Navigation, Autoplay];
    const shirts = ref([]);
    const selectedShirt = ref({});
    const selectedSize = ref('');

    onMounted(async () => {
      // Simulación de datos de camisas (puedes reemplazar con una API real)
      shirts.value = [
        {
          title: 'Camisa Casual Azul',
          price: '$29.99',
          description: 'Camisa de algodón 100%, ideal para uso casual, diseño moderno y cómodo.',
          sizes: ['S', 'M', 'L', 'XL'],
          image: '/images/camisa-azul.jpg',
        },
        {
          title: 'Camisa Formal Blanca',
          price: '$39.99',
          description: 'Camisa elegante para ocasiones formales, perfecta para combinar con trajes.',
          sizes: ['M', 'L', 'XL'],
          image: '/images/camisa-blanca.jpg',
        },
        {
          title: 'Camisa Deportiva Negra',
          price: '$24.99',
          description: 'Camisa transpirable para actividades deportivas, con tecnología de secado rápido.',
          sizes: ['S', 'M', 'L'],
          image: '/images/camisa-negra.jpg',
        },
      ];
      // Selecciona la primera camisa por defecto
      selectedShirt.value = shirts.value[0];
      selectedSize.value = selectedShirt.value.sizes[0];
    });

    const selectShirt = (shirt) => {
      selectedShirt.value = shirt;
      selectedSize.value = shirt.sizes[0]; // Selecciona la primera talla por defecto
    };

    const addToCart = () => {
      console.log(`Añadiendo al carrito: ${selectedShirt.value.title}, Talla: ${selectedSize.value}`);
      // Aquí puedes agregar la lógica real para el carrito
    };

    return {
      modules,
      shirts,
      selectedShirt,
      selectedSize,
      selectShirt,
      addToCart,
    };
  },
};
</script>

<style scoped>
/* Estilo del contenedor principal */
.camisas-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(135deg, #f0f4f7, #e1e8ed); /* Fondo azul claro */
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  gap: 40px;
}

/* Sección del slider (izquierda) */
.slider-section {
  flex: 1;
  max-width: 40%;
}

.shirt-slider {
  width: 100%;
  height: auto;
}

.shirt-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.shirt-image:hover {
  transform: scale(1.05);
}

/* Sección de información (derecha) */
.info-section {
  flex: 1;
  max-width: 50%;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.shirt-title {
  font-size: 2rem;
  color: #1e3a8a; /* Azul oscuro */
  font-weight: 600;
  margin-bottom: 10px;
}

.shirt-price {
  font-size: 1.5rem;
  color: #1e40af; /* Azul medio */
  margin-bottom: 15px;
  font-weight: bold;
}

.shirt-description {
  font-size: 1.1rem;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 20px;
}

.shirt-size {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.size-label {
  font-size: 1rem;
  color: #64748b;
  margin-right: 10px;
}

.size-dropdown {
  padding: 8px 12px;
  border: 2px solid #3b82f6;
  border-radius: 10px;
  background: transparent;
  color: #1e3a8a;
  font-size: 1rem;
  cursor: pointer;
}

.add-to-cart-button {
  --background: #1e3a8a; /* Azul oscuro */
  --color: #ffffff;
  --border-radius: 9999px;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
  --padding-start: 1.5rem;
  --padding-end: 1.5rem;
  --transition: all 0.3s ease;
}

.add-to-cart-button:hover {
  --background: #1e40af; /* Azul medio en hover */
}

/* Responsividad */
@media (max-width: 1024px) {
  .camisas-container {
    flex-direction: column;
    align-items: center;
  }

  .slider-section,
  .info-section {
    max-width: 100%;
    width: 100%;
  }

  .slider-section {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .shirt-title {
    font-size: 1.5rem;
  }

  .shirt-price {
    font-size: 1.25rem;
  }

  .shirt-description {
    font-size: 1rem;
  }

  .add-to-cart-button {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  .camisas-container {
    padding: 20px;
  }

  .shirt-title {
    font-size: 1.25rem;
  }

  .shirt-price {
    font-size: 1rem;
  }

  .shirt-description {
    font-size: 0.9rem;
  }

  .size-dropdown {
    font-size: 0.875rem;
  }

  .add-to-cart-button {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>