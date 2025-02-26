<template>
  <ion-page>
    <div>
    <Buscador />
    <!-- Otros elementos del menú -->
  </div>
    <Banner class="banner" />
  
    <Header class="header"  />
    

    <ion-content >
        <div class="fondo_img ">
          <SliderInit class="Slider" />
        </div>

    
    
        <div class="mensaje-container">
      <h1 class="mensaje-destacado">¡EMPIEZA A CALENTAR QUE SALES!</h1>
        </div>


      <Contenido class="contenido" />

      <div class="mensaje-container">
      <h1 class="mensaje-destacado">¡EQUIPATE CON LO MEJOR!</h1>
        </div>
        <Productos class="containerProduct" />



        <Footer   />

        
    </ion-content>

  </ion-page>


</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import SliderInit from '@/components/SliderInit.vue';
import Contenido from '@/components/Contenido.vue';
import Productos from '@/components/Productos.vue';
import Footer from '@/components/Footer.vue';
import Buscador from "@/components/Buscador.vue";







export default {
  components: {
    IonPage,
    IonContent,
    Header,
    Banner,
    SliderInit,
    Contenido,
    Productos,
    Footer,
    Buscador
    
     
  }
};
</script>

<style scoped>

.prueba {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #ff4500;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}




.mensaje-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25vh;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    text-align: center;
}

.mensaje-destacado {
    font-size: 4rem;
    font-weight: 700;
    color: #2b2d42;
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
    width: 120px;
    height: 4px;
    background: #ef233c;
    border-radius: 2px;
}

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

/* Responsive Design */
@media (max-width: 768px) {
    .mensaje-destacado {
        font-size: 2.5rem;
        letter-spacing: 1px;
    }
}

@media (max-width: 480px) {
    .mensaje-destacado {
        font-size: 2rem;
    }
}




/* Estilos específicos para la página Home */
.header {
  margin-top: 30px; /* Asegura que el contenido no se solape con el banner */
}

ion-content {
  text-align: center;
  padding: 30px;
}

.fondo_img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/fondo.jpg"); /* Ruta de la imagen */
  background-size: cover; /* Cubre todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-attachment: fixed; /* Fija la imagen al desplazarse (opcional) */
  height: 40em; /* Altura del 100% del viewport */
  width: 100%; /* Ancho del 100% del contenedor */
  position: relative; /* Para posicionar elementos hijos */
  z-index: 1; /* Asegura que esté por encima de otros elementos */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Sombra intensa en la parte inferior */

}
/* Opcional: Añadir un overlay oscuro para mejorar la legibilidad del contenido */
.fondo_img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /* Overlay oscuro */
  z-index: -1; /* Coloca el overlay detrás del contenido */
}


/* Cambiar el fondo de la vista a blanco */
ion-content {
  --background: #fafafa; /* Fondo blanco */
  
}


</style>