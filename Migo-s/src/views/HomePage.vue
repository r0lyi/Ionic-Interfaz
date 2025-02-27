<template>
  <ion-page>
    <ion-content>
      <Header class="header" />

      <div class="fondo_img">
        <SliderInit class="Slider" />

        <div class="mensaje-container">
          <h1 class="mensaje-destacado">¡EMPIEZA A CALENTAR QUE SALES!</h1>
        </div>
      </div>

      <Contenido class="contenido" />

      <div class="mensaje-container">
        <h1 class="mensaje-destacado">¡EQUIPATE CON LO MEJOR!</h1>
      </div>
      <Productos class="containerProduct" />

      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';
import SliderInit from '@/components/SliderInit.vue';
import Contenido from '@/components/Contenido.vue';
import Productos from '@/components/Productos.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    IonPage,
    IonContent,
    Header,
    SliderInit,
    Contenido,
    Productos,
    Footer,
  },
};
</script>

<style scoped>
/* Estilos generales */
ion-content {
  --background: #2b2828;
  text-align: center;
  padding: 30px;
}

/* Slider */
.Slider {
  margin-top: 3em;
  width: 100%; /* Asegura que no desborde */
}

/* Contenedor del mensaje */
.mensaje-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  background: transparent;
  text-align: center;
}

/* Texto destacado */
.mensaje-destacado {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 3px 3px 0 rgba(43, 45, 66, 0.1);
  position: relative;
  line-height: 1.2;
  max-width: 1200px;
  animation: aparecer 1s ease-out forwards;
}

.mensaje-destacado::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 10em;
  height: 4px;
  background: #ef233c;
  border-radius: 2px;
}

/* Animación */
@keyframes aparecer {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fondo con imagen */
.fondo_img {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/fondo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 60em;
  width: 100%;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.fondo_img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: -1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .fondo_img {
    height: 50em; /* Reduce ligeramente la altura */
  }

  .mensaje-container {
    min-height: 20vh; /* Ajusta la altura mínima */
  }

  .Slider {
    margin-top: 2em; /* Reduce el margen superior */
  }
}

@media (max-width: 768px) {
  .fondo_img {
    height: 40em; /* Más compacto */
  }

  .mensaje-container {
    min-height: 18vh;
  }

  .mensaje-destacado {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }

  .mensaje-destacado::after {
    bottom: -15px; /* Ajusta la línea decorativa */
    width: 8em;
  }

  ion-content {
    padding: 20px; /* Reduce el padding */
  }
}

@media (max-width: 480px) {
  .fondo_img {
    height: 30em; /* Más pequeño para móviles */
  }

  .mensaje-container {
    min-height: 15vh;
  }

  .mensaje-destacado {
    font-size: 2rem;
  }

  .mensaje-destacado::after {
    bottom: -10px;
    width: 6em;
  }

  .Slider {
    margin-top: 1.5em;
  }

  ion-content {
    padding: 15px;
  }
}

@media (max-width: 360px) {
  .mensaje-destacado {
    font-size: 1.5rem; /* Tamaño mínimo legible */
  }

  .mensaje-destacado::after {
    width: 5em;
  }
}
</style>