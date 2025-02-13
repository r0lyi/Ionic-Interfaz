<template>
  <ion-page>
    <Banner class="banner" />
  
    <Header class="header" title="Inicio" />
    
    <ion-content >
      
      <div class="contenedor_init">

      <section class="fotos_artic">

      </section>
        
        <div class="fondo_img">

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
height: 40em;
width: 100%;

}
.fondo_img{
  background-color: aqua;
  height: 100%;
  width: 100%;
}
.fotos_artic{
  background-color: bisque;
}

</style>