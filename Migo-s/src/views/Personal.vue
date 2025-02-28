<template>
  <ion-page>
    <Header class="header" />
    
    <ion-content>
      <!-- Sección de fondo con imagen -->
      <div class="imagen_fondo">
        <div class="contenido">
          <h1>¡Prepárate y personaliza tu equipación!</h1>
          <p>Ahora con Migo-S puedes crear tu propia equipación y recibir descuentos por personalizarla. Añade número y nombre, y ¡calienta para salir a jugar!</p>
          <ion-button class="cta-button">Personalizar Ahora</ion-button>
        </div>
      </div>

      <!-- Sección de productos -->
      <camisas />
      <shorts />
      <botas />
      <calsetines />

      <!-- Sección de botones de acción -->
      <div class="action-buttons">
        <ion-button class="buy-button" @click="buyAction">Comprar</ion-button>
        <ion-button class="save-button" @click="saveAction">Guardar</ion-button>
        <ion-button class="cancel-button" @click="cancelAction">Cancelar</ion-button>
      </div>

      <!-- Footer -->
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import camisas from '@/components/camisas.vue';
import botas from '@/components/botas.vue';
import shorts from '@/components/shorts.vue';
import calsetines from '@/components/calsetines.vue';
import { IonPage, IonContent, IonButton } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    Header,
    Footer,
    camisas,
    botas,
    shorts,
    calsetines,
  },
  methods: {
    buyAction() {
      console.log('Acción: Comprar');
      alert('¡Compra realizada con éxito!');
    },
    saveAction() {
      console.log('Acción: Guardar');
      alert('¡Equipación guardada!');
    },
    cancelAction() {
      console.log('Acción: Cancelar');
      alert('¡Acción cancelada!');
    },
  },
};
</script>

<style scoped>
/* Fondo con imagen */
.imagen_fondo {
  height: 50vh;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2019/03/03/16/32/sport-4032242_640.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Overlay con gradiente para sofisticación */
.imagen_fondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  z-index: 1;
}

/* Contenido centrado */
.contenido {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 900px;
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;
}

/* Animación de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estilo del título */
h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
}

/* Estilo de la descripción */
p {
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

/* Botón Call-to-Action */
.cta-button {
  --background: #ff5722;
  --background-activated: #e64a19;
  --border-radius: 8px;
  --padding-start: 2rem;
  --padding-end: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  --background: #f4511e;
  transform: scale(1.05);
}

/* Sección de botones de acción */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
}

/* Estilo del botón Comprar */
.buy-button {
  --background: #000000; /* Fondo negro */
  --color: #ffffff; /* Texto blanco */
  --border-radius: 10px;
  --border-color: #1e90ff; /* Borde azul */
  --border-style: solid;
  --border-width: 2px;
  --padding-start: 2rem;
  --padding-end: 2rem;
  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.buy-button:hover {
  --background: #1e90ff; /* Fondo azul al hover */
  --color: #000000; /* Texto negro al hover */
  --box-shadow: 0 6px 20px rgba(30, 144, 255, 0.5);
  transform: translateY(-2px);
}

/* Estilo del botón Guardar */
.save-button {
  --background: #1e90ff; /* Fondo azul */
  --color: #ffffff; /* Texto blanco */
  --border-radius: 10px;
  --border-color: #000000; /* Borde negro */
  --border-style: solid;
  --border-width: 2px;
  --padding-start: 2rem;
  --padding-end: 2rem;
  --box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.save-button:hover {
  --background: #ffffff; /* Fondo blanco al hover */
  --color: #1e90ff; /* Texto azul al hover */
  --box-shadow: 0 6px 20px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* Estilo del botón Cancelar */
.cancel-button {
  --background: #ffffff; /* Fondo blanco */
  --color: #000000; /* Texto negro */
  --border-radius: 10px;
  --border-color: #1e90ff; /* Borde azul */
  --border-style: solid;
  --border-width: 2px;
  --padding-start: 2rem;
  --padding-end: 2rem;
  --box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.cancel-button:hover {
  --background: #000000; /* Fondo negro al hover */
  --color: #ffffff; /* Texto blanco al hover */
  --box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .imagen_fondo {
    height: 40vh;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .contenido {
    padding: 1.5rem;
  }

  .cta-button {
    --padding-start: 1.5rem;
    --padding-end: 1.5rem;
    font-size: 1rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .buy-button,
  .save-button,
  .cancel-button {
    --padding-start: 1.5rem;
    --padding-end: 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}

/* Fondo del contenido principal */
ion-content {
  --background: #f4f4f4;
}
</style>