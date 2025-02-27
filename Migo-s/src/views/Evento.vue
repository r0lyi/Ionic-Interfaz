<template>
    <ion-page>
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
  import Footer from '@/components/Footer.vue';
  import Eventos from '@/components/Eventos.vue';

  
  import { IonPage, IonContent } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonContent,
      Header,
     
      Footer,
      Productos,
      Eventos
    },
   
  };
  </script>
  
  <style scoped>
 
  
  
  
  ion-content {
    --background: #5096e6;
  }
  
  
  </style>