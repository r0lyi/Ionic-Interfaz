<template>
    <div class="gusto-container">
      <h1 class="title">Productos Favoritos</h1>
      <swiper
        :direction="'vertical'"
        :slides-per-view="'auto'"
        :space-between="20"
        :scrollbar="{ draggable: true }"
        :modules="modules"
        class="gusto-swiper"
      >
        <swiper-slide v-for="(item, index) in productos" :key="item.id || index" class="gusto-slide">
          <div class="gusto-card">
            <div class="gusto-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <div class="gusto-details">
              <h2 class="gusto-name">{{ item.name }}</h2>
              <p class="gusto-price">{{ formatPrice(item.price) }}</p>
              <p class="gusto-description">{{ item.description }}</p>
              <div class="gusto-actions">
                <ion-icon
                  :name="item.isFavorite ? 'heart' : 'heart-outline'"
                  class="action-icon heart-icon"
                  :class="{ 'active': item.isFavorite }"
                  @click="toggleFavorite(item)"
                ></ion-icon>
                <ion-icon
                  :name="item.isInCart ? 'cart' : 'cart-outline'"
                  class="action-icon cart-icon"
                  :class="{ 'active': item.isInCart }"
                  @click="toggleCart(item)"
                ></ion-icon>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Scrollbar } from 'swiper/modules';
  import { ref, onMounted } from 'vue';
  import { IonIcon } from '@ionic/vue';
  
  import 'swiper/css'; // Estilos base de Swiper
  import 'swiper/css/scrollbar'; // Estilos para la barra de desplazamiento
  import '@ionic/vue/css/core.css'; // Estilos base de Ionic (puedes incluirlo aquí o en main.js)
  
  export default {
    name: 'GustoComponent',
    components: {
      Swiper,
      SwiperSlide,
      IonIcon,
    },
    setup() {
      const productos = ref([]);
  
      const formatPrice = (price) => {
        return new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }).format(price);
      };
  
      const toggleFavorite = (item) => {
        item.isFavorite = !item.isFavorite;
      };
  
      const toggleCart = (item) => {
        item.isInCart = !item.isInCart;
      };
  
      onMounted(async () => {
        try {
          const response = await import('@/assets/data/gusto.json');
          productos.value = response.default.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image,
            isFavorite: false, // Estado inicial para favorito
            isInCart: false,   // Estado inicial para carrito
          }));
        } catch (error) {
          console.error('Error al cargar los productos:', error);
        }
      });
  
      return {
        modules: [Scrollbar],
        productos,
        formatPrice,
        toggleFavorite,
        toggleCart,
      };
    },
  };
  </script>
  
  <style scoped>
  .gusto-container {
    max-width: 60em;
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #f5f6fa, #ebedf0);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #1a1a2e;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .gusto-swiper {
    height: 600px; /* Altura fija para el slider vertical */
    width: 100%;
    overflow: hidden;
  }
  
  .gusto-slide {
    height: auto; /* Altura automática para adaptarse al contenido */
    display: flex;
    justify-content: center;
  }
  
  .gusto-card {
    display: flex;
    align-items: center;
    width: 100%;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
  }
  
  .gusto-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .gusto-image {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-right: 20px;
    flex-shrink: 0;
  }
  
  .gusto-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .gusto-name {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 10px;
  }
  
  .gusto-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ff2d55;
    margin: 0 0 10px;
  }
  
  .gusto-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin: 0 0 15px;
  }
  
  .gusto-actions {
    display: flex;
    gap: 15px;
    margin-top: auto; /* Alinea los iconos al final del contenedor */
  }
  
  .action-icon {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .heart-icon {
    color: #ccc; /* Gris claro por defecto */
  }
  
  .heart-icon.active {
    color: #ff2d55; /* Rojo cuando está activo */
  }
  
  .cart-icon {
    color: #ccc; /* Gris claro por defecto */
  }
  
  .cart-icon.active {
    color: #6b21a8; /* Morado cuando está activo */
  }
  
  /* Estilo para la barra de desplazamiento */
  :deep(.swiper-scrollbar) {
    width: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  :deep(.swiper-scrollbar-drag) {
    background: #6b21a8; /* Morado */
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .gusto-container {
      padding: 20px;
    }
  
    .title {
      font-size: 2rem;
    }
  
    .gusto-swiper {
      height: 500px; /* Reducir altura en pantallas pequeñas */
    }
  
    .gusto-card {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .gusto-image {
      width: 100%;
      height: 200px;
      margin-right: 0;
      margin-bottom: 15px;
    }
  
    .gusto-name {
      font-size: 1.5rem;
    }
  
    .gusto-price {
      font-size: 1.25rem;
    }
  
    .gusto-description {
      font-size: 0.9rem;
    }
  
    .action-icon {
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 480px) {
    .gusto-swiper {
      height: 400px; /* Más pequeño para móviles */
    }
  
    .gusto-name {
      font-size: 1.25rem;
    }
  
    .gusto-price {
      font-size: 1.1rem;
    }
  
    .action-icon {
      font-size: 1rem;
    }
  }
  </style>