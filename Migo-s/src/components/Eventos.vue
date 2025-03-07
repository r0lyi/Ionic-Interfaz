<template>
  <div class="events-container">
    <!-- Título de la vista -->
    <h1 class="title">Eventos Destacados</h1>

    <!-- Secciones de eventos -->
    <div
      v-for="(event, index) in items"
      :key="event.id || index"
      class="event-section"
      :class="{ 'reverse': index % 2 !== 0 }"
    >
      <div class="event-image">
        <img :src="event.image" :alt="event.title" />
      </div>
      <div class="event-details">
        <h2>{{ event.title }}</h2>
        <p class="event-date">{{ event.fecha }}</p>
        <p class="event-description">{{ event.description }}</p>
        <!-- Botón de Registro -->
        <button class="register-button" @click="navigateToEvent(event.id)">
          ¡Únete!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const items = ref([]);

    onMounted(async () => {
      try {
        const response = await import('@/assets/data/Eventos.json');
        items.value = response.default.map((item, index) => ({
          id: item.id !== undefined ? item.id : index, // Asegura que cada evento tenga un ID
          title: item.title,
          description: item.description,
          image: item.image,
          fecha: item.Caracteristicas_evento.fecha, // Mapea Caracteristicas_evento.fecha a fecha
        }));
      } catch (error) {
        console.error('Error al cargar eventos:', error);
      }
    });

    const navigateToEvent = (eventId) => {
      router.push(`/evento/${eventId}`);
    };

    return {
      items,
      navigateToEvent,
    };
  },
};
</script>

<style scoped>
.events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f3e8ff, #dbeafe);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #4c1d95;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 30px;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.event-section.reverse {
  flex-direction: row-reverse;
}

.event-image {
  flex: 0 0 400px; /* Limita el ancho de la imagen a 400px */
}

.event-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.event-image img:hover {
  transform: scale(1.05);
}

.event-details {
  flex: 1;
  padding: 20px;
}

.event-details h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4c1d95;
  font-weight: 600;
}

.event-date {
  font-size: 1rem;
  color: #1e40af;
  margin-bottom: 15px;
  font-style: italic;
}

.event-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 20px;
}

.register-button {
  background: #6b21a8;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.register-button:hover {
  background: #4c1d95;
  transform: scale(1.05);
}

.register-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #a78bfa;
}

@media (max-width: 1024px) {
  .event-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .event-section.reverse {
    flex-direction: column;
  }

  .event-image {
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 20px;
  }

  .event-image img {
    width: 100%;
  }

  .event-details {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .event-details h2 {
    font-size: 1.5rem;
  }

  .event-description {
    font-size: 1rem;
  }

  .register-button {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .events-container {
    padding: 20px;
  }

  .event-section {
    padding: 15px;
  }

  .event-details h2 {
    font-size: 1.25rem;
  }

  .event-date {
    font-size: 0.875rem;
  }

  .event-description {
    font-size: 0.9rem;
  }

  .register-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>