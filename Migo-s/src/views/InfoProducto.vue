<template>
  <ion-page>
    <Banner class="banner" />
    <Header class="header" />
    
    <ion-content>
      <div class="producto-container">
        <div class="producto-grid">
          <div class="imagen-producto"></div>
          <div class="info-producto">
            <h2 class="titulo">Nombre del Producto</h2>
            <p class="precio">$99.99</p>
            <p class="talla">Talla: M</p>
            <div class="estrellas">★★★★☆ (4.5/5)</div>
            
            <!-- Contador de cantidad -->
            <div class="cantidad-selector">
              <button class="btn-cantidad" @click="decreaseQuantity">-</button>
              <span class="cantidad">{{ quantity }}</span>
              <button class="btn-cantidad" @click="increaseQuantity">+</button>
            </div>
            
            <p class="descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- Sección de instrucciones de lavado y características -->
        <div class="care-instructions">
          <h3>Instrucciones de Cuidado</h3>
          <div class="wash-icons">
            <span class="icon">🧼</span> <!-- Lavado a máquina -->
            <span class="icon">🌡️</span> <!-- Temperatura máxima -->
            <span class="icon">🧺</span> <!-- Secado en secadora -->
            <span class="icon">🚫</span> <!-- No usar lejía -->
          </div>
          <h3>Características</h3>
          <ul class="features-list">
            <li>Suela de goma antideslizante</li>
            <li>Material transpirable</li>
            <li>Amortiguación de espuma</li>
            <li>Diseño ergonómico</li>
          </ul>
        </div>
      </div>

      <!-- Sección de comentarios -->
      <ComentProduct />


      <Productos class="containerProduct" />

      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import Productos from '@/components/Productos.vue';

import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import ComentProduct from '@/components/ComentProduct.vue';

import { IonPage, IonContent } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonContent,
    Header,
    Banner,
    Footer,
    ComentProduct,
    Productos
  },
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    }
  }
};
</script>

<style scoped>
.producto-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.producto-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
  margin-bottom: 30px;
}

.imagen-producto {
  height: 300px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-producto {
  padding: 20px;
}

.titulo {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #333;
}

.precio {
  font-size: 22px;
  font-weight: 500;
  color: #2c3e50;
  margin: 0 0 10px 0;
}

.talla {
  font-size: 16px;
  color: #666;
  margin: 0 0 10px 0;
}

.estrellas {
  color: #f1c40f;
  font-size: 18px;
  margin-bottom: 15px;
}

.descripcion {
  font-size: 14px;
  color: #777;
  line-height: 1.6;
}

/* Estilos del contador */
.cantidad-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.btn-cantidad {
  width: 30px;
  height: 30px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.btn-cantidad:hover {
  background-color: #34495e;
}

.cantidad {
  font-size: 18px;
  min-width: 30px;
  text-align: center;
}

/* Estilos de instrucciones de cuidado */
.care-instructions {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.care-instructions h3 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
}

.wash-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.wash-icons .icon {
  font-size: 24px;
}

.features-list {
  list-style: none;
  padding: 0;
  font-size: 14px;
  color: #666;
}

.features-list li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
}

.features-list li:before {
  content: "✓";
  color: #2c3e50;
  position: absolute;
  left: 0;
}

.header {
  margin-top: 30px;
}

ion-content {
  --background: #fafafa;
}

/* Responsive design */
@media (max-width: 768px) {
  .producto-grid {
    grid-template-columns: 1fr;
  }
  
  .imagen-producto {
    height: 250px;
  }
}
</style>