<template>
  <div class="coment-container">
    <h1 class="title">Opiniones de Usuarios</h1>
    <div class="rating-section">
      <div class="stars">
        <ion-icon
          v-for="star in 5"
          :key="star"
          name="star"
          class="star"
          @click="redirectToRating"
        ></ion-icon>
      </div>
      <ion-button class="comment-button" @click="redirectToComment">
        Comenta
      </ion-button>
    </div>

    <!-- Lista de comentarios -->
    <div class="comments">
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <div class="user-info">
          <span class="user-name">{{ comment.nombre }} {{ comment.apellido }}</span>
          <span class="user-details">{{ comment.sexo }} | {{ comment.pais }}</span>
        </div>
        <div class="user-rating">
          <ion-icon
            v-for="s in 5"
            :key="s"
            :name="s <= comment.estrellas ? 'star' : 'star-outline'"
            class="rating-star"
          ></ion-icon>
        </div>
        <p class="user-comment">{{ comment.comentario }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { IonIcon, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ComentProduct',
  components: {
    IonIcon,
    IonButton,
  },
  data() {
    return {
      comments: [
        {
          nombre: "Juan",
          apellido: "Pérez",
          sexo: "Hombre",
          pais: "México",
          estrellas: 4,
          comentario: "¡Excelente servicio! Muy recomendado.",
        },
        {
          nombre: "Ana",
          apellido: "Gómez",
          sexo: "Mujer",
          pais: "España",
          estrellas: 5,
          comentario: "Increíble experiencia, volvería sin duda.",
        },
        {
          nombre: "Carlos",
          apellido: "López",
          sexo: "Hombre",
          pais: "Argentina",
          estrellas: 3,
          comentario: "Bueno, pero podría mejorar en algunos aspectos.",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();

    const redirectToRating = () => {
      router.push({ name: 'RatingView' });
    };

    const redirectToComment = () => {
      router.push({ name: 'Opinion' });
    };

    return {
      redirectToRating,
      redirectToComment,
    };
  },
};
</script>

<style scoped>
.coment-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #1a1a1a; /* Negro */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  color: #ffffff; /* Blanco por defecto */
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a; /* Azul oscuro */
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.rating-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.stars {
  display: flex;
  gap: 10px;
}

.star {
  font-size: 2.5rem;
  color: #ffffff; /* Blanco por defecto */
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.star:hover {
  color: #ffd700; /* Dorado al pasar el mouse */
  transform: scale(1.2);
}

.comment-button {
  --background: #1e3a8a; /* Azul oscuro */
  --color: #ffffff; /* Blanco */
  --border-radius: 25px;
  --padding-start: 30px;
  --padding-end: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: transform 0.3s ease, background 0.3s ease;
}

.comment-button:hover {
  --background: #2b528f; /* Azul más claro */
  transform: scale(1.05);
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.comment {
  background: #ffffff; /* Blanco */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.comment:hover {
  transform: translateY(-5px);
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.user-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e3a8a; /* Azul oscuro */
}

.user-details {
  font-size: 1rem;
  color: #666;
}

.user-rating {
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
}

.rating-star {
  font-size: 1.5rem;
  color: #ffd700; /* Dorado */
}

.user-comment {
  font-size: 1.1rem;
  color: #1a1a1a; /* Negro */
  line-height: 1.6;
  font-style: italic;
}

/* Responsividad */
@media (max-width: 768px) {
  .coment-container {
    padding: 30px 15px;
  }

  .title {
    font-size: 2rem;
  }

  .star {
    font-size: 2rem;
  }

  .comment-button {
    font-size: 1rem;
    --padding-start: 20px;
    --padding-end: 20px;
  }

  .user-name {
    font-size: 1.2rem;
  }

  .user-comment {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .coment-container {
    padding: 20px 10px;
  }

  .title {
    font-size: 1.8rem;
  }

  .star {
    font-size: 1.5rem;
  }

  .rating-section {
    gap: 15px;
  }

  .user-name {
    font-size: 1.1rem;
  }

  .user-details {
    font-size: 0.9rem;
  }

  .rating-star {
    font-size: 1.2rem;
  }
}
</style>