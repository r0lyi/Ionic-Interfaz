<template>
  <div class="products-container">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="30"
      :scrollbar="{ draggable: true }"
      :modules="modules"
      class="products-swiper"
    >
      <swiper-slide v-for="(item, index) in productos" :key="item.id || index" class="product-slide">
        <div class="product-card" @click="navigateToProduct(index)">
          <div class="product-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
          <div class="product-details">
            <h3 class="product-name">{{ item.name }}</h3>
            <p class="product-price">{{ formatPrice(item.price) }}</p>
            <p class="product-description">{{ item.description }}</p>
            <div class="product-rating">
              <ion-icon
                v-for="star in 5"
                :key="star"
                :name="star <= item.rating ? 'star' : 'star-outline'"
                class="rating-star"
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
import { Autoplay, FreeMode, Scrollbar } from 'swiper/modules';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProductosComponent',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const productos = ref([]);

    const slidesPerView = computed(() => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      if (window.innerWidth < 1280) return 3;
      return 4;
    });

    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
      }).format(price);
    };

    const navigateToProduct = (index) => {
      // Redirige a la vista InfoProducto con el índice del producto
      router.push(`/producto/${index}`);
    };

    onMounted(async () => {
      try {
        const response = await import('@/assets/data/productos.json');
        productos.value = response.default.map((item, index) => ({
          ...item,
          id: item.id || index, // ID único para navegación
          description: item.description || 'Producto de alta calidad para deportistas.',
          rating: item.rating || Math.floor(Math.random() * 5) + 1,
        }));
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    });

    return {
      modules: [Autoplay, FreeMode, Scrollbar],
      productos,
      slidesPerView,
      formatPrice,
      navigateToProduct,
    };
  },
};
</script>

<style scoped>
/* Estilo sin cambios */
.products-container {
  width: 100%;
  padding: 2.5rem 0;
  background: linear-gradient(180deg, #f5f6fa 0%, #ebedf0 100%);
}

.products-swiper {
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
}

.product-slide {
  display: flex;
  justify-content: center;
  height: auto;
}

.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  border-bottom: 3px solid #1100ff;
}

.product-details {
  padding: 2rem;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ff2d55;
  margin: 0;
}

.product-description {
  font-size: 1rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-rating {
  display: flex;
  gap: 0.3rem;
  margin-top: auto;
}

.rating-star {
  font-size: 1.25rem;
  color: #ffd700;
}

@media (max-width: 1280px) {
  .product-card {
    max-width: 360px;
  }
  .product-image {
    height: 320px;
  }
}

@media (max-width: 1024px) {
  .product-card {
    max-width: 340px;
  }
  .product-image {
    height: 300px;
  }
  .product-details {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .products-container {
    padding: 1.5rem 0;
  }
  .products-swiper {
    padding: 1rem;
  }
  .product-card {
    max-width: 100%;
  }
  .product-image {
    height: 280px;
  }
  .product-name {
    font-size: 1.25rem;
  }
  .product-price {
    font-size: 1.5rem;
  }
  .product-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .product-image {
    height: 240px;
  }
  .product-details {
    padding: 1rem;
  }
}
</style>