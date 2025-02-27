<template>
  <ion-page>
    <Header class="header" />
    
    <ion-content>
      <!-- Sección de fondo con imagen -->
      <div class="imagen_fondo">
        <div class="contenido">
          <h1>¡Prepárate y personaliza tu equipación!</h1>
          <p>Ahora con Migo-S puedes crear tu propia equipación y recibir descuentos por crear tu equipación. Pon el número y el nombre de la equipación y ¡Calienta para salir a jugar!</p>
        </div>
      </div>

      <!-- Sección de camisas -->
      <camisas class="containerEventos" />

      <!-- Footer -->
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import camisas from '@/components/camisas.vue';
import { IonPage, IonContent } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonContent,
    Header,
    Footer,
    camisas,
  },
};
</script>

<style scoped>
/* Fondo con imagen */
.imagen_fondo {
  height: 40em; /* Altura fija para que la imagen sea grande */
  width: 100%; /* Ocupa todo el ancho disponible */
  background-image: url('https://cdn.pixabay.com/photo/2019/03/03/16/32/sport-4032242_640.jpg'); /* Ruta de tu imagen */
  background-size: cover; /* La imagen cubre todo el div */
  background-position: center; /* Centra la imagen */
  display: flex; /* Usamos flexbox para centrar el contenido */
  justify-content: center; /* Centrado horizontal */
  align-items: center; /* Centrado vertical */
  position: relative; /* Para el overlay */
}

/* Overlay oscuro para mejorar la legibilidad del texto */
.imagen_fondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Fondo negro semi-transparente */
  z-index: 1;
}

/* Contenido centrado sobre la imagen */
.contenido {
  text-align: center; /* Centra el texto dentro del contenedor */
  color: white; /* Color blanco para que destaque sobre la imagen */
  padding: 20px; /* Espaciado interno */
  border-radius: 10px; /* Bordes redondeados para un mejor diseño */
  z-index: 2; /* Asegura que el contenido esté sobre el overlay */
  max-width: 800px; /* Ancho máximo para el contenido */
  margin: 0 auto; /* Centrar el contenido */
}

/* Estilo del título */
h1 {
  font-size: 2.5em; /* Tamaño grande para que el título destaque */
  margin-bottom: 20px; /* Espacio entre título y descripción */
  font-weight: bold; /* Negrita para mayor impacto */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para resaltar */
}

/* Estilo de la descripción */
p {
  font-size: 1.2em; /* Tamaño legible para la descripción */
  line-height: 1.6; /* Espaciado entre líneas */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra para resaltar */
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .imagen_fondo {
    height: 30em; /* Reducir la altura en móviles */
  }

  h1 {
    font-size: 2em; /* Tamaño más pequeño para móviles */
  }

  p {
    font-size: 1em; /* Tamaño más pequeño para móviles */
  }
}

/* Fondo del contenido principal */
ion-content {
  --background: #f4f4f4; /* Color de fondo claro */
}
</style>