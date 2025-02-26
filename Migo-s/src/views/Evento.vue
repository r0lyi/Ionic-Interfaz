<template>
    <ion-page>
      <Banner class="banner" />
      <Header class="header" />
      
      <ion-content>
        <Eventos class="containerEventos" />
  
        <Footer />
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import Productos from '@/components/Productos.vue';
  
  import Header from '@/components/Header.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '@/components/Footer.vue';
  import Eventos from '@/components/Eventos.vue';

  
  import { IonPage, IonContent } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonContent,
      Header,
      Banner,
      Footer,
      Productos,
      Eventos
    },
   
  };
  </script>
  
  <style scoped>
 
  
  .header {
    margin-top: 30px;
  }
  
  ion-content {
    --background: #fafafa;
  }
  
  
  </style>