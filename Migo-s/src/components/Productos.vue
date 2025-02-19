<template>
  <div class="containerProduct">
    <swiper
      :slidesPerView="3"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in productos" :key="index">
        <div class="content-overlay">
          <div class="imagen" :style="{ backgroundImage: `url(${item.image})` }"></div>
        <h2>{{ item.name }}</h2>
        <h2>{{ item.price }}</h2>
        </div>
        
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { ref, onMounted } from 'vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const productos = ref([]);

    onMounted(async () => {
      const response = await import('@/assets/data/productos.json');
      productos.value = response.default;
    });

    return {
      modules: [Pagination, Autoplay, FreeMode],
      productos,
    };
  },
};
</script>

<style scoped>
.containerProduct {
  width: 100%;
  height: 50em;
  background-color: #817b7b;
}

.imagen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px; /* Ajusta según sea necesario */
  background-size: cover;
  background-position: center;
  background-color: red;
}
.mySwiper {
  width: 100%;
  height: 20em;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;

 
}
.content-overlay {
  width: 30em;
  height: 100%;
  background-color: antiquewhite;
}

</style>