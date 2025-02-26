<template>
    <ion-page>
      <Banner class="banner" />
      <Header class="header" />
  
      <ion-content>
        <div class="contenedor-event">
          <!-- Imagen grande del evento -->
          <div class="event-image-container">
            <img :src="event.image" :alt="event.title" class="event-image" />
            <div class="event-laws">
              <img
                v-for="(law, index) in event.laws"
                :key="index"
                :src="law"
                :alt="'Ley ' + (index + 1)"
                class="law-image"
              />
            </div>
          </div>
  
          <!-- Información del evento -->
          <div class="event-info">
            <h1 class="event-title">{{ event.title }}</h1>
            <p class="event-description">{{ event.description }}</p>
  
            <!-- Listado de información del evento -->
            <div class="event-details">
              <h2>Información del Evento</h2>
              <ul>
                <li><strong>Lugar:</strong> {{ event.location }}</li>
                <li><strong>Precio:</strong> {{ event.price }}</li>
                <li><strong>Hora:</strong> {{ event.time }}</li>
                <li><strong>Día:</strong> {{ event.date }}</li>
                <li><strong>Organizador:</strong> {{ event.organizer }}</li>
              </ul>
            </div>
  
            <!-- Listado de premios -->
            <div class="event-prizes">
              <h2>Premios</h2>
              <ul>
                <li v-for="(prize, index) in event.prizes" :key="index">
                  {{ prize }}
                </li>
              </ul>
            </div>
  
            <!-- Listado de cómo participar -->
            <div class="event-participation">
              <h2>Cómo Participar</h2>
              <ol>
                <li v-for="(step, index) in event.participationSteps" :key="index">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
  
        <Footer />
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Banner from "@/components/Banner.vue";
  import Footer from "@/components/Footer.vue";
  import { IonPage, IonContent } from "@ionic/vue";
  
  export default {
    components: {
      IonPage,
      IonContent,
      Header,
      Banner,
      Footer,
    },
    data() {
      return {
        // Datos de ejemplo para el evento
        event: {
          title: "Torneo de Fútbol 2023",
          description:
            "Únete al torneo de fútbol más emocionante del año. Compite contra los mejores equipos y gana premios increíbles.",
          image: "https://via.placeholder.com/800x400",
          laws: [
            "https://via.placeholder.com/100x100",
            "https://via.placeholder.com/100x100",
            "https://via.placeholder.com/100x100",
          ],
          location: "Estadio Principal, Ciudad Deportiva",
          price: "Gratis",
          time: "10:00 AM",
          date: "25 de Noviembre, 2023",
          organizer: "Asociación Deportiva Local",
          prizes: [
            "Trofeo para el equipo ganador",
            "Medallas para los finalistas",
            "Premios en efectivo",
          ],
          participationSteps: [
            "Regístrate en el sitio web oficial.",
            "Forma tu equipo de 5 jugadores.",
            "Asiste a la reunión técnica el día 20 de Noviembre.",
            "Participa en los partidos según el calendario.",
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .contenedor-event {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .event-image-container {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .event-image {
    width: 70%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .event-laws {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .law-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .event-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .event-title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .event-description {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
  }
  
  .event-details,
  .event-prizes,
  .event-participation {
    margin-bottom: 30px;
  }
  
  h2 {
    font-size: 1.8rem;
    color: #444;
    margin-bottom: 15px;
  }
  
  ul,
  ol {
    padding-left: 20px;
  }
  
  li {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .event-image-container {
      flex-direction: column;
    }
  
    .event-image {
      width: 100%;
    }
  
    .event-laws {
      flex-direction: row;
      justify-content: center;
    }
  
    .law-image {
      width: 80px;
      height: 80px;
    }
  }
  </style>