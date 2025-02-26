<template>
    <div class="events-container">
      <!-- Título de la vista -->
      <h1 class="title">Eventos Destacados</h1>
  
      <!-- Secciones de eventos -->
      <div 
        v-for="(event, index) in events" 
        :key="index" 
        class="event-section"
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <div class="event-image">
          <img :src="event.image" :alt="event.title" />
        </div>
        <div class="event-details">
          <h2>{{ event.title }}</h2>
          <p class="event-date">{{ event.date }}</p>
          <p class="event-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Datos de ejemplo para los eventos
        events: [
          {
            title: "Concierto de Rock",
            date: "15 de Octubre, 2023",
            description: "Disfruta de una noche llena de energía con las mejores bandas de rock nacionales e internacionales.",
            image: "https://via.placeholder.com/400x300"
          },
          {
            title: "Feria de Arte Moderno",
            date: "20 de Noviembre, 2023",
            description: "Explora las obras más innovadoras de artistas contemporáneos en esta exposición única.",
            image: "https://via.placeholder.com/400x300"
          },
          {
            title: "Festival Gastronómico",
            date: "5 de Diciembre, 2023",
            description: "Saborea los mejores platos de la cocina local e internacional en este festival culinario.",
            image: "https://via.placeholder.com/400x300"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .events-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
  }
  
  .event-section {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    gap: 20px;
  }
  
  .event-section.reverse {
    flex-direction: row-reverse;
  }
  
  .event-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .event-details {
    flex: 1;
  }
  
  .event-details h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #444;
  }
  
  .event-date {
    font-size: 1rem;
    color: #777;
    margin-bottom: 15px;
  }
  
  .event-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .event-section {
      flex-direction: column;
    }
  
    .event-section.reverse {
      flex-direction: column;
    }
  
    .event-image img {
      width: 100%;
    }
  }
  </style>