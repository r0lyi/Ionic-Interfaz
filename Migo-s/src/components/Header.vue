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
                  
  
  
  
  <div class="right flex items-center gap-4">
    <!-- Contenedor del buscador -->
    <div class="buscador">
      <ion-searchbar
        placeholder="Buscar"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        class="custom-searchbar"
      ></ion-searchbar>
    </div>

    <!-- Contenedor de los iconos -->
    <div class="">
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
  /* -------------------------------- */
  .buscador{
    border-radius: 50px; /* Bordes redondeados */
    overflow: hidden; /* Asegura que los bordes redondeados se apliquen correctamente */
    height: 100px;
    width: 170px;

  }
  /* Estilos personalizados para el buscador */
.custom-searchbar {
  border-radius:50px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que los bordes redondeados se apliquen correctamente */
}

/* Anular estilos internos del ion-searchbar */
.custom-searchbar .searchbar-input-container {
  border-radius:50px /* Bordes redondeados para el contenedor interno */
}

.custom-searchbar .searchbar-input {
  border-radius:50px /* Bordes redondeados para el input */
}


/* Efecto hover para los iconos */
.icon-button {
  --background: transparent;
  --background-hover: transparent;
  --color: white;
  --color-hover: rgba(255, 255, 255, 0.8);
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
  
  
  .Contenedor_Menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
  }
  
  
  
  
  </style>