<template>
    <ion-page>
      <Header class="header" />
      <ion-content>
        <div class="info-gustos-container">
          <gusto />
          <div class="divider"></div>
          <div class="subtitulo">
            <h3>Productos que te pueden gustar</h3>
          </div>
          <Productos />
          <Footer />
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonContent } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import gusto from '@/components/gusto.vue';
  import Productos from '@/components/Productos.vue';
  
  export default {
    name: 'InfoGustos',
    components: {
      IonPage,
      IonContent,
      Header,
      Footer,
      gusto,
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
  
      const formatPrice = (price) => {
        return new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }).format(price);
      };
  
      onMounted(async () => {
        try {
          const response = await import('@/assets/data/gusto.json');
          const productos = response.default;
          producto.value = productos.find((item) => item.id === Number(props.id)) || null;
  
          if (producto.value) {
            producto.value.description = producto.value.description || 'Sin descripción disponible.';
            producto.value.detalles = producto.value.detalles || 'No hay detalles adicionales.';
            producto.value.caracteristicas = producto.value.caracteristicas || ['No se especificaron características.'];
            producto.value.instrucciones_lavado = producto.value.instrucciones_lavado || [
              'Consultar instrucciones en la etiqueta.',
            ];
            producto.value.tallas = producto.value.tallas || [];
            producto.value.rating = producto.value.rating || 0;
          }
        } catch (error) {
          console.error('Error al cargar el producto:', error);
        }
      });
  
      return {
        producto,
        formatPrice,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Contenedor principal */
  .info-gustos-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background: #1a1a1a; /* Negro */
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    color: #ffffff; /* Blanco por defecto */
  }
  
  /* Línea divisoria */
  .divider {
    width: 80%;
    height: 2px;
    background: #1e3a8a; /* Azul oscuro */
    margin: 30px auto;
    border-radius: 1px;
  }
  
  /* Subtítulo */
  .subtitulo {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .subtitulo h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1e3a8a; /* Azul oscuro */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
  
  /* Estilo para componentes importados */
  :deep(.gusto-container) {
    background: #ffffff; /* Blanco para el slider */
    border: 2px solid #1e3a8a; /* Borde azul oscuro */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  :deep(.gusto-card) {
    background: #ffffff;
    border-radius: 10px;
  }
  
  :deep(.gusto-name) {
    color: #1e3a8a; /* Azul oscuro para nombres */
  }
  
  :deep(.gusto-price) {
    color: #1a1a1a; /* Negro para precios */
  }
  
  :deep(.gusto-description) {
    color: #666; /* Gris oscuro para descripciones */
  }
  
  :deep(.swiper-scrollbar-drag) {
    background: #1e3a8a; /* Azul oscuro para la barra de desplazamiento */
  }
  
  :deep(.products-container) {
    background: #ffffff; /* Blanco para Productos */
    border: 2px solid #1e3a8a; /* Borde azul oscuro */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsividad */
  @media (max-width: 1024px) {
    .info-gustos-container {
      padding: 30px 15px;
    }
  
    .divider {
      width: 90%;
    }
  
    .subtitulo h3 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .info-gustos-container {
      padding: 20px 10px;
    }
  
    .divider {
      width: 95%;
    }
  
    .subtitulo h3 {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 480px) {
    .info-gustos-container {
      padding: 15px 5px;
    }
  
    .divider {
      width: 100%;
    }
  
    .subtitulo h3 {
      font-size: 1.1rem;
    }
  }
  </style>