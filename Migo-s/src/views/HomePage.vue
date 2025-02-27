<template>
  <ion-page>
    


    <ion-content >
      <Header class="header"  />

        <div class="fondo_img ">
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



        <Footer   />

        
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
    
    
     
  }
};
</script>

<style scoped>

.Slider{
  margin-top: 3em;
}




.mensaje-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25vh;
    background: transparent;
    text-align: center;
}

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
    width: 10em ;
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






ion-content {
  --background: #2b2828; /* Fondo blanco */
  text-align: center;
  padding: 30px;
}

.fondo_img {
 
  display: flex;
  flex-direction: column;

  align-items: center;
  background-image: url("/images/fondo.jpg"); /* Ruta de la imagen */
  background-size: cover; /* Cubre todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-attachment: fixed; /* Fija la imagen al desplazarse (opcional) */
  height: 60em; /* Altura del 100% del viewport */
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



</style>