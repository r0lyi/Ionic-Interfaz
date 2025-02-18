<template>
  <ion-page>
    <Banner class="banner" />
  
    <Header class="header" title="Inicio" />
    

    <ion-content >
      
      <div class="contenedor_init">

      <section class="fotos_artic">

      </section>
        
        <div class="fondo_img ">

        </div>
      </div>
    </ion-content>


  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home',
  components: {
    IonPage,
    IonContent,
    Header,
    Banner
  }
};
</script>

<style scoped>
/* Estilos específicos para la página Home */
.header {
  margin-top: 30px; /* Asegura que el contenido no se solape con el banner */
}

ion-content {
  text-align: center;
  padding: 30px;
}
.contenedor_init{
background-color: aliceblue;
height: 35em;
width: 100%;

}
.fondo_img {
  background-image: url("../assets/img/fondo.jpg"); /* Ruta de la imagen */
  background-size: cover; /* Cubre todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-attachment: fixed; /* Fija la imagen al desplazarse (opcional) */
  height: 100%; /* Altura del 100% del viewport */
  width: 100%; /* Ancho del 100% del contenedor */
  position: relative; /* Para posicionar elementos hijos */
  z-index: 1; /* Asegura que esté por encima de otros elementos */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9); /* Sombra intensa en la parte inferior */

}
/* Opcional: Añadir un overlay oscuro para mejorar la legibilidad del contenido */
.fondo_img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05); /* Overlay oscuro */
  z-index: -1; /* Coloca el overlay detrás del contenido */
}
.fotos_artic{
  background-color: bisque;
}

/* Cambiar el fondo de la vista a blanco */
ion-content {
  --background: #B8DFF6; /* Fondo blanco */
  
}


</style>