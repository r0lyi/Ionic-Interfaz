<template>
    <div class="Contendor_camisa">
      <!-- Slider de Camisas -->
      <div class="camisa">
        <swiper
          :effect="'coverflow'"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="{ clickable: true }"
          :modules="modules"
          class="mySwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide v-for="(shirt, index) in shirts" :key="index">
            <img :src="shirt.imagen" :alt="shirt.titulo" class="shirt-image" />
          </swiper-slide>
        </swiper>
      </div>
  
      <!-- Descripción del Producto -->
      <div class="descripcion">
        <h2 class="product-title">{{ selectedShirt.titulo || 'Selecciona una camisa' }}</h2>
        <p class="product-price" v-if="selectedShirt.precio">
          ${{ selectedShirt.precio.toFixed(2) }}
        </p>
        <p class="product-description">{{ selectedShirt.descripcion || 'Descripción no disponible' }}</p>
        <div class="product-size" v-if="selectedShirt.talla && selectedShirt.talla.length">
          <span class="size-label">Talla:</span>
          <select v-model="selectedSize" class="size-select">
            <option v-for="size in selectedShirt.talla" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <ion-button class="add-to-cart-button" @click="addToCart" :disabled="!selectedSize">
          Añadir al Carrito
        </ion-button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import { IonButton } from '@ionic/vue';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
      IonButton,
    },
    setup() {
      const modules = [EffectCoverflow, Pagination];
      const shirts = ref([]);
      const selectedShirt = ref({});
      const selectedSize = ref(''); // Nueva variable para la talla seleccionada
  
      onMounted(async () => {
        try {
          const response = await import('@/assets/data/shorts.json');
          shirts.value = response.default;
          // Seleccionar la primera camisa por defecto
          if (shirts.value.length > 0) {
            selectedShirt.value = shirts.value[0];
            selectedSize.value = shirts.value[0].talla[0]; // Talla por defecto
          }
        } catch (error) {
          console.error('Error al cargar camisas.json:', error);
        }
      });
  
      const onSlideChange = (swiper) => {
        // Actualizar la camisa seleccionada al cambiar de slide
        if (shirts.value.length > 0) {
          selectedShirt.value = shirts.value[swiper.activeIndex];
          selectedSize.value = shirts.value[swiper.activeIndex].talla[0]; // Resetear a la primera talla
        }
      };
  
      const addToCart = () => {
        if (selectedShirt.value.titulo && selectedSize.value) {
          console.log(`Añadiendo al carrito: ${selectedShirt.value.titulo}, Talla: ${selectedSize.value}`);
          alert(`¡${selectedShirt.value.titulo} (Talla: ${selectedSize.value}) añadida al carrito!`);
        }
      };
  
      return {
        modules,
        shirts,
        selectedShirt,
        selectedSize,
        onSlideChange,
        addToCart,
      };
    },
  };
  </script>
  
  <style scoped>
  .Contendor_camisa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35rem;
    width: 100%;
    margin: 0 auto;
    background-color: #f5f5f5;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilo del Slider */
  .camisa {
    height: 25rem;
    width: 50%;
    overflow: hidden;
  }
  
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    width: 300px;
    height: 100%;
    opacity: 0.7;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .swiper-slide-active {
    opacity: 1;
    transform: scale(1.1);
  }
  
  .shirt-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Estilo de la Descripción */
  .descripcion {
    width: 45%;
    padding: 2rem;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .product-title {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    line-height: 1.2;
  }
  
  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #27ae60;
    margin: 0;
  }
  
  .product-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
  
  .product-size {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .size-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .size-select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background: #62cfd3;
    cursor: pointer;
    min-width: 100px;
  }
  
  .add-to-cart-button {
    margin-top: auto;
    --background: #3498db;
    --background-activated: #2980b9;
    --border-radius: 8px;
    --padding-start: 1.5rem;
    --padding-end: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .add-to-cart-button:hover {
    --background: #2980b9;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .Contendor_camisa {
      flex-direction: column;
      height: auto;
      padding: 1rem;
    }
  
    .camisa,
    .descripcion {
      width: 100%;
      height: auto;
    }
  
    .camisa {
      height: 20rem;
    }
  
    .product-title {
      font-size: 1.5rem;
    }
  
    .product-price {
      font-size: 1.3rem;
    }
  
    .size-select {
      min-width: 80px;
    }
  }
  </style>