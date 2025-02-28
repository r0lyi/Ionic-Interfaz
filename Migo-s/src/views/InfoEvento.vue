<template>
  <ion-page>
    <Header class="header" />

    <ion-content>
      <div class="events-container">
        <!-- Imagen grande del evento y leyes -->
        <div v-if="evento" class="event-image-container">
          <img :src="evento.image" :alt="evento.title" class="event-image" />
          <div class="event-laws">
            <img
              v-for="(law, index) in evento.laws"
              :key="index"
              :src="law"
              class="law-image"
            />
          </div>
        </div>

        <!-- Contenedor de información del evento -->
        <div v-if="evento" class="event-info">
          <!-- Título y descripción -->
          <div class="event-section">
            <div class="event-details">
              <h1 class="event-title">{{ evento.title }}</h1>
              <p class="event-description">{{ evento.description }}</p>
              <button class="register-button" @click="register">Inscribirse</button>
            </div>
          </div>

          <!-- Información del evento -->
          <div class="event-section">
            <div class="event-details">
              <h2>Información del Evento</h2>
              <ul>
                <li><strong>Lugar:</strong> {{ evento.Caracteristicas_evento.lugar || 'Por definir' }}</li>
                <li><strong>Precio:</strong> {{ formatPrice(evento.Caracteristicas_evento.inscripcion) }}</li>
                <li><strong>Hora:</strong> {{ evento.Caracteristicas_evento.hora || 'Por confirmar' }}</li>
                <li><strong>Fecha:</strong> {{ evento.Caracteristicas_evento.fecha }}</li>
                <li><strong>Categoría:</strong> {{ evento.Caracteristicas_evento.categoria }}</li>
              </ul>
            </div>
          </div>

          <!-- Premios -->
          <div class="event-section">
            <div class="event-details">
              <h2>Premios</h2>
              <ul>
                <li v-for="(prize, index) in evento.prizes" :key="index">{{ prize }}</li>
              </ul>
            </div>
          </div>

          <!-- Cómo participar -->
          <div class="event-section">
            <div class="event-details">
              <h2>Cómo Participar</h2>
              <ol>
                <li v-for="(step, index) in evento.participationSteps" :key="index">{{ step }}</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Mensaje si no se encuentra el evento -->
        <div v-else class="no-event">Evento no encontrado</div>

        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'InfoEventos',
  components: {
    IonPage,
    IonContent,
    Header,
    Footer,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const evento = ref(null);

    const formatPrice = (price) => {
      if (price === 'Gratis' || !price) return 'Gratis';
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
      }).format(price);
    };

    const register = () => {
      console.log(`Inscribiéndose al evento: ${evento.value.title}`);
      // Aquí puedes añadir lógica para redirigir a un formulario de inscripción o abrir un modal
    };

    onMounted(async () => {
      try {
        const response = await import('@/assets/data/Eventos.json');
        const eventos = response.default;
        evento.value = eventos.find((item) => item.id === Number(props.id)) || null;

        if (evento.value) {
          evento.value.description = evento.value.description || 'Sin descripción disponible.';
          evento.value.laws = evento.value.laws || [];
          evento.value.prizes = evento.value.prizes || ['No se especificaron premios.'];
          evento.value.participationSteps = evento.value.participationSteps || [
            'Consulta los detalles en el sitio oficial.',
          ];
        }
      } catch (error) {
        console.error('Error al cargar el evento:', error);
      }
    });

    return {
      evento,
      formatPrice,
      register,
    };
  },
};
</script>

<style scoped>
/* Estilo consistente con Eventos.vue */
.events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f3e8ff, #dbeafe); /* Degradado morado a azul */
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.event-image-container {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.event-image {
  width: 70%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.event-image:hover {
  transform: scale(1.05);
}

.event-laws {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.law-image {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.event-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.event-section {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ffffff; /* Fondo blanco para las secciones */
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.event-details {
  flex: 1;
  padding: 20px;
}

.event-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #4c1d95; /* Morado oscuro */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4c1d95; /* Morado oscuro */
  font-weight: 600;
}

ul,
ol {
  padding-left: 20px;
}

li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 10px;
}

li strong {
  color: #1e40af; /* Azul oscuro */
}

.register-button {
  background: #6b21a8; /* Morado intenso */
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
  background: #4c1d95; /* Morado más oscuro */
  transform: scale(1.05);
}

.register-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #a78bfa; /* Anillo de foco morado claro */
}

.no-event {
  text-align: center;
  font-size: 1.5rem;
  color: #334155;
  padding: 20px;
}

/* Responsividad */
@media (max-width: 1024px) {
  .event-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .event-image {
    width: 100%;
    margin-bottom: 20px;
  }

  .event-details {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .event-title {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .event-description {
    font-size: 1rem;
  }

  li {
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

  .event-title {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .event-description {
    font-size: 0.9rem;
  }

  li {
    font-size: 0.9rem;
  }

  .law-image {
    width: 80px;
    height: 80px;
  }

  .register-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>