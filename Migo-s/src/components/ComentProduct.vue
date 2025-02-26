<template>
    <div class="container-coment">

      <h1 class="title">Opiniones de usuario</h1>
      <div class="stars">
        <span 
          v-for="star in 5" 
          :key="star" 
          class="star" 
          @click="redirectToRating"
        >
          ★
        </span>
      </div>
  
      <!-- Lista de comentarios -->
      <div class="comments">
        <div 
          v-for="(comment, index) in comments" 
          :key="index" 
          class="comment"
        >
          <div class="user-info">
            <span>{{ comment.nombre }} {{ comment.apellido }}</span> |
            <span>{{ comment.sexo }}</span> |
            <span>{{ comment.pais }}</span>
          </div>
          <div class="user-rating">
            <span 
              v-for="star in comment.estrellas" 
              :key="star" 
              class="star"
            >
              ★
            </span>
          </div>
          <div class="user-comment">
            {{ comment.comentario }}
          </div>
        </div>
      </div>
 
      
    </div>




  </template>
  
  <script>
  export default {
    data() {
      return {
        // Datos de ejemplo para los comentarios
        comments: [
          {
            nombre: "Juan",
            apellido: "Pérez",
            sexo: "Hombre",
            pais: "México",
            estrellas: 4,
            comentario: "¡Excelente servicio! Muy recomendado."
          },
          {
            nombre: "Ana",
            apellido: "Gómez",
            sexo: "Mujer",
            pais: "España",
            estrellas: 5,
            comentario: "Increíble experiencia, volvería sin duda."
          },
          {
            nombre: "Carlos",
            apellido: "López",
            sexo: "Hombre",
            pais: "Argentina",
            estrellas: 3,
            comentario: "Bueno, pero podría mejorar en algunos aspectos."
          }
        ]
      };
    },
    methods: {
      redirectToRating() {
        // Redirige a la vista de valoración
        this.$router.push({ name: 'RatingView' });
      }
    }
  };
  </script>
  
  <style scoped>
  .container-coment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: black;
  }
  
  .stars {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }
  
  .star {
    font-size: 2rem;
    cursor: pointer;
    color: gold;
    transition: color 0.3s ease;
  }
  
  .star:hover {
    color: orange;
  }
  
  .comments {
    width: 100%;
    max-width: 600px;
  }
  
  .comment {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    text-align: left;
  }
  
  .user-info {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .user-rating {
    margin-bottom: 10px;
  }
  
  .user-rating .star {
    font-size: 1.2rem;
    color: gold;
    cursor: default;
  }
  
  .user-comment {
    font-style: italic;
    color: #555;
  }
  </style>