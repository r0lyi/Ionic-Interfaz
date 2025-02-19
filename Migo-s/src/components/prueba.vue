<template>
  <div class="containerProduct">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
    >
      <swiper-slide v-for="(product, index) in products" :key="index">
        <div class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-details">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <ion-button expand="full" color="primary" @click="addToCart(product)">
              Agregar al carrito
            </ion-button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { IonButton } from '@ionic/vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonButton,
  },
  setup() {
  const modules = [FreeMode, Pagination];
  
  const paginationOptions = ref({
    dynamicBullets: true,
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet"></span>`;
    },
  });

    // Cargar los productos cuando el componente se monta
    onMounted(async () => {
    const response = await import('@/assets/data/infoInit.json');
    items.value = response.default;
  });

    const addToCart = (product) => {
      console.log("Producto agregado al carrito:", product);
    };

    return {
      modules: [FreeMode, Pagination],
      products,
      addToCart,
    };
  },
};
</script>

<style scoped>
.containerProduct {
  width: 100%;
  padding: 2em 0;
  background-color: #f9f9f9;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-details {
  padding: 1em;
  text-align: center;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5em 0;
}

.product-price {
  font-size: 1rem;
  color: #e91e63;
  font-weight: bold;
  margin: 0.5em 0;
}

ion-button {
  margin-top: 1em;
}

/* Responsividad */
@media (max-width: 768px) {
  .product-card {
    margin: 0 10px;
  }
}
</style>