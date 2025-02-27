<template>
  <div class="slider-container">
    <swiper
      :modules="modules"
      :pagination="paginationOptions"
      :autoplay="autoplayOptions"
      :navigation="navigationOptions"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="content-overlay">
          <h2 class="slide-description">{{ item.description }}</h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Pagination, Autoplay, Navigation];

    const paginationOptions = ref({
      dynamicBullets: true,
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} custom-bullet"></span>`;
      },
    });

    const autoplayOptions = ref({
      delay: 5000,
      disableOnInteraction: false,
    });

    const navigationOptions = ref({
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    });

    const items = ref([]);

    onMounted(async () => {
      const response = await import('@/assets/data/infoInit.json');
      items.value = response.default;
    });

    return {
      modules,
      paginationOptions,
      autoplayOptions,
      navigationOptions,
      items,
    };
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
}

.mySwiper {
  width: 100%;
  height: 600px;
  position: relative;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.swiper-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.content-overlay {
  position: relative;
  z-index: 2;
  padding: 40px;
  color: white;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.4s ease;
}

.swiper-slide-active .content-overlay {
  transform: translateY(0);
  opacity: 1;
}

.slide-description {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  background: transparent;
  padding: 20px 30px;
  border-radius: 15px;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 90%;
}

.slide-description:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

/* Personalización de la navegación */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white !important;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 1.5rem;
  font-weight: bold;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Personalización de la paginación */
:deep(.custom-bullet) {
  width: 15px !important;
  height: 15px !important;
  background: rgba(255, 255, 255, 0.5) !important;
  transition: all 0.3s ease !important;
  margin: 0 8px !important;
  border: 2px solid transparent;
}

:deep(.custom-bullet.swiper-pagination-bullet-active) {
  background: #0011ff !important;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);
  border-color: white;
}

/* Efecto de carga de imagen */
@keyframes imageLoad {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.swiper-slide-visible {
  animation: imageLoad 1.5s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Diseño Responsivo */
@media (max-width: 1024px) {
  .mySwiper {
    height: 500px;
  }
  .content-overlay {
    padding: 30px;
  }
  .slide-description {
    font-size: 1.25rem;
    padding: 15px 25px;
  }
}

@media (max-width: 768px) {
  .slider-container {
    border-radius: 0;
  }
  .mySwiper {
    height: 400px;
  }
  .content-overlay {
    padding: 20px;
  }
  .slide-description {
    font-size: 1rem;
    padding: 10px 20px;
  }
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}

@media (max-width: 480px) {
  .mySwiper {
    height: 300px;
  }
  .content-overlay {
    padding: 10px;
  }
  .slide-description {
    font-size: 0.875rem;
    padding: 8px 15px;
  }
  :deep(.custom-bullet) {
    width: 12px !important;
    height: 12px !important;
    margin: 0 5px !important;
  }
}
</style>