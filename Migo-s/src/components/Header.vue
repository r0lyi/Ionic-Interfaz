<template>
    <ion-header>
      <ion-toolbar>
  
        <div class="Contenedor_Menu">
  
       <div class="left">
        <ion-title>{{ title }}</ion-title>
        </div>
  
  
  
  
        <div class="menu_opcions bg-transparent py-3">
    <div class="center flex justify-center gap-8">
      <ion-button @click="navigateTo('/Deportes')" fill="clear" class="menu-button">
        <ion-label class="text-white hover:text-gray-200 transition-colors duration-300">Deportes</ion-label>
      </ion-button>

      <ion-button @click="navigateTo('/Hombre')" fill="clear" class="menu-button">
        <ion-label class="text-white hover:text-gray-200 transition-colors duration-300">Hombre</ion-label>
      </ion-button>

      <ion-button @click="navigateTo('/Mujer')" fill="clear" class="menu-button">
        <ion-label class="text-white hover:text-gray-200 transition-colors duration-300">Mujer</ion-label>
      </ion-button>

      <ion-button @click="navigateTo('/Ofertas')" fill="clear" class="menu-button">
        <ion-label class="text-white hover:text-gray-200 transition-colors duration-300">Ofertas</ion-label>
      </ion-button>
    </div>
  </div>
                  
  
  
  
        <div class="right ">
          <!-- Contenedor del buscador -->

        <div class="buscador">
          <ion-searchbar class="custom-searchbar"  placeholder=" "></ion-searchbar>
      </div>

    <!-- Contenedor de los iconos -->
    <div class="iconos">
      <!-- Icono de corazón (gustos) -->
      <ion-button @click="navigateTo('/gustos')" fill="clear" class="icon-button p-0">
        <ion-icon :icon="heartOutline" class="text-xl text-white hover:text-gray-200 transition-colors duration-300"></ion-icon>
      </ion-button>

      <!-- Icono de carrito (carrito) -->
      <ion-button @click="navigateTo('/carrito')" fill="clear" class="icon-button p-0">
        <ion-icon :icon="cartOutline" class="text-xl text-white hover:text-gray-200 transition-colors duration-300"></ion-icon>
      </ion-button>

      <!-- Icono de usuario (user) -->
      <ion-button @click="navigateTo('/user')" fill="clear" class="icon-button p-0">
        <ion-icon :icon="personOutline" class="text-xl text-white hover:text-gray-200 transition-colors duration-300"></ion-icon>
      </ion-button>
    </div>
  </div>
  
  
  
    </div>
  
      </ion-toolbar>
    </ion-header>
  </template>
  
  <script>
  import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/vue';
  import {
    heartOutline,
    cartOutline,
    personOutline,
  } from "ionicons/icons";
  export default {
    name: 'Header',
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonButton,
      IonIcon
    },
    props: {
      title: {
        type: String,
        default: 'Mi Aplicación'
      }
    },

    setup() {
      const navigateTo = (path) => {
        console.log('Navigating to', path);
      };

      return {
        navigateTo,
        heartOutline,
        cartOutline,
        personOutline,
      };
    }
  
  
  };
  </script>
  
  <style scoped>
.Contenedor_Menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
    background-color: #B8DFF6;

  }  /* -------------------------------- */

      /* Estilos personalizados para el buscador */
      .custom-searchbar {
        width: 150px; /* Ancho reducido */
        overflow: hidden; /* Asegura que los bordes redondeados se apliquen correctamente */
        border-top-left-radius:50px ;
        border-top-right-radius:50px  ;
        border-bottom-left-radius: 50px ;
        border-bottom-right-radius: 50px ;
        color: white;


      }

      /* Anular estilos internos del ion-searchbar */
      .custom-searchbar .searchbar-input-container {
        border-top-left-radius:50px ;
        border-top-right-radius:50px  ;
        border-bottom-left-radius: 50px ;
        border-bottom-right-radius: 50px ;
        color: white;

      }

      .custom-searchbar .searchbar-input {
        border-top-left-radius:50px ;
        border-top-right-radius:50px  ;
        border-bottom-left-radius: 50px ;
        border-bottom-right-radius: 50px ;
        color: white;

      }

  .right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
  }

  .buscador{
    width: 300px;
    background-color: transparent;
    border-top-right-radius: 20px;  
    border-bottom-right-radius: 20px;
  }


  .iconos{
    display: flex;
    align-items: center;
    color: black;
   
  }

   


/* Efecto hover para los iconos */
.icon-button {
  --background: transparent;
  --background-hover: transparent;
  --color: black;
  --color-hover: rgba(255, 255, 255, 1.8);
  

}

  
  
  /**------------------------------------ */
  /* Contenedor principal del menú */
/* Efecto de subrayado personalizado */
.menu-button {
  position: relative;
  padding: 8px 0; /* Espaciado interno */
}

.menu-button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: white; /* Color de la línea */
  transition: width 0.3s ease; /* Transición suave */
}

.menu-button:hover::after {
  width: 100%; /* Línea subrayada al hacer hover */
}
  /* Estilos específicos para el componente Header ---------------*/
  
  
  
  ion-toolbar {
    --background: #c5cbd6;
    --color: white;
  }
  
  ion-title {
    font-size: 1.5rem;
  }
  
  

  
  
  
  
  </style>