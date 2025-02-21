<template>
    <ion-page>
      
      <ion-content >
        <div class="login-container">
          <div class="form-container">
            <h2 class="form-title">Iniciar Sesión</h2>
            <h3>Inicia secion con tu cuenta Migos</h3>

            <ion-item lines="none" class="custom-input">
              <ion-label position="floating">Correo electrónico</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
  
            <ion-item lines="none" class="custom-input">
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
  
            <ion-button expand="full" class="icon-button" @click="login">
              Iniciar sesión
            </ion-button>

            <h3>¿Haz olvidado tu contraseña?</h3>
            <h3>¿Eres nuevo en Migo-s?  <a href="Register">Registrate</a></h3>


          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
    },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lógica para manejar el login
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #1e3c72, #2a5298); /* Fondo degradado */
  }
  
  .form-container {
    
    background: rgba(255, 255, 255, 0.1); /* Fondo semitransparente */
    backdrop-filter: blur(10px); /* Efecto de desenfoque */
    border-radius: 15px; /* Bordes redondeados */
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
    height: 50em;
    width: 30em;

  }
  
  .form-title {
    text-align: center;
    color: white;
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .custom-input {
    --background: transparent; /* Fondo transparente */
    --border-width: 0;
    --border-style: none;
    --border-color: transparent;
    --padding-start: 0;
    --inner-padding-end: 0;
    margin-bottom: 30px;
  }
  
  .custom-input ion-label {
    color: #3880ff; /* Color azul para el label */
    margin-bottom: 20px;
  }
  
  .custom-input ion-input {
    background: transparent; /* Fondo transparente */
    border-bottom: 2px solid #3880ff; /* Línea azul en la parte inferior */
    --padding-start: 0;
    --padding-end: 0;
    color: white; /* Color del texto */
  }
  
  .custom-input ion-input:focus {
    border-bottom: 2px solid #1a4f8b; /* Cambia el color de la línea al enfocar */
  }
  
  .icon-button {
    --background: transparent;
    --background-hover: transparent;
    --color: white;
    --color-hover: rgba(255, 255, 255, 0.8);
    border: 2px solid #3880ff; /* Borde azul */
    border-radius: 25px; /* Bordes redondeados */
    margin-top: 20px;
  }
  
  .icon-button:hover {
    --background: rgba(56, 128, 255, 0.1); /* Fondo semitransparente al pasar el mouse */
    --color: rgba(255, 255, 255, 0.8); /* Color del texto al pasar el mouse */
  }


/* Cambiar el fondo de la vista a blanco */
ion-content {
    
  --background: #fafafa; /* Fondo blanco */
  
}
  </style>