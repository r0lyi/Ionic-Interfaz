<template>
  <ion-page>
    <ion-content class="relative bg-cover bg-center bg-no-repeat" style="background-image: url('/images/sports-background.jpg');">
      <!-- Formulario centrado -->
      <div class="relative flex justify-center items-center min-h-screen p-4">
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-2xl p-6 w-full max-w-md border border-blue-200">
          <div class="text-center">
            <h2 class="text-2xl font-bold text-blue-900 mb-2">Inicio de Sesión</h2>
            <p class="text-blue-600 text-sm mb-6">Inicia sesión con tu cuenta de Migo-S</p>
          </div>

          <!-- Campo de Correo Electrónico -->
          <ion-item lines="none" class="mb-6 mt-2.5">
            <ion-label position="floating" class="text-blue-700">Correo Electrónico</ion-label>
            <ion-input 
              type="email" 
              v-model="email" 
              required 
              class="text-blue-900 border-b-2 border-blue-500 focus:border-blue-600 margin-bottom-100"
            ></ion-input>
          </ion-item>

          <!-- Campo de Contraseña -->
          <ion-item lines="none" class="mb-6 mt-2.5">
            <ion-label position="floating" class="text-blue-700">Contraseña</ion-label>
            <ion-input 
              type="password" 
              v-model="password" 
              required 
              class="text-blue-900 border-b-2 border-blue-500 focus:border-blue-600"
            ></ion-input>
          </ion-item>

          <!-- Botón de Iniciar Sesión -->
          <ion-button
            expand="block"
            class="w-full mb-4 bg-black text-blue-500 border-2 border-white hover:bg-gray-900 rounded-full font-semibold py-3 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            @click="login"
          >
            Iniciar sesión
          </ion-button>

          <!-- Línea de separación -->
          <div class="border-t border-blue-200 mt-7 mb-7"></div>

          <!-- Enlace "¿Olvidaste tu contraseña?" -->
          <p class="text-center text-blue-600 mb-4">
            <a href="#" class="hover:underline">¿Has olvidado tu contraseña?</a>
          </p>

          <!-- Botón de Google -->
          <ion-button 
            expand="block" 
            class="w-full mb-4 bg-black text-blue-500 border-2 border-white hover:bg-gray-900 rounded-full font-medium py-3 transition-all flex items-center justify-center gap-2"
            @click="googleLogin"
          >
            <ion-icon name="logo-google" class="text-red-500"></ion-icon>
            Continuar con Google
          </ion-button>

          <!-- Enlace de Registro -->
          <p class="text-center text-blue-600 mb-8">
            ¿Eres nuevo en Migo-S? <a href="/register" class="hover:underline">Regístrate</a>
          </p>

          <!-- Logo de Migo-S -->
          <div class="text-center">
            <img src="" alt="Migo-S Logo" class="w-32 mx-auto">
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/vue';

export default {
  name: 'LoginPage',
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    },
    googleLogin() {
      console.log('Iniciando sesión con Google');
      // Aquí iría la lógica de autenticación con Google
    },
  },
};
</script>

<style scoped>
/* Ajustes específicos para Ionic con Tailwind */
ion-content {
  --background: transparent;
}

ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  --background: transparent; /* Asegura que el item no tenga fondo */
}

ion-input {
  --padding-top: 0.5rem;
  --padding-bottom: 0.5rem;
  --background: transparent; /* Sin fondo en los inputs */
  background: transparent !important; /* Sobrescribe cualquier estilo predeterminado */
}

/* Estilo personalizado para la línea azul debajo de los inputs */
ion-input {
  border-bottom: 2px solid #3b82f6; /* Azul 500 de Tailwind */
}

ion-input:focus-within {
  border-bottom: 2px solid #2563eb; /* Azul 600 de Tailwind para el foco */
}

/* Estilo para el botón */
ion-button {
  --background: #000000 !important; /* Fondo negro */
  --color: #3b82f6 !important; /* Azul 500 para el texto */
  --border-color: #ffffff !important; /* Bordes blancos */
  --border-width: 2px !important;
  --border-radius: 9999px !important; /* rounded-full en píxeles */
  --padding-top: 0.75rem !important;
  --padding-bottom: 0.75rem !important;
  --padding-start: 1rem !important;
  --padding-end: 1rem !important;
  --transition: all 0.3s ease !important; /* Transición suave */
}

ion-button:hover {
  --background: #1a1a1a !important; /* Gris oscuro para hover, más oscuro que gray-900 */
}

ion-button:focus {
  --box-shadow: 0 0 0 2px #3b82f6 !important; /* Anillo azul para foco */
}

/* Fondo de imagen (puedes ajustar la opacidad o la imagen) */
.bg-cover {
  background-size: cover;
  background-position: center;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-container {
    padding: 1.5rem;
    margin: 0 0.5rem;
    border-width: 1px;
  }

  .form-title {
    font-size: 1.5rem;
  }

  ion-button {
    font-size: 0.9rem;
    padding: 0.75rem;
  }

  .logo-img {
    width: 24; /* Ajusta el tamaño del logo en móviles */
  }
}
</style>