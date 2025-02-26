<template>
    <ion-page>
      <Banner class="banner" />
      <Header class="header" />
  
      <ion-content>
        <div class="contenedor-opinion">
          <!-- Imagen del producto y descripción -->
          <div class="product-section">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-details">
              <h1 class="product-name">{{ product.name }}</h1>
              <p class="product-description">{{ product.description }}</p>
            </div>
          </div>
  
          <!-- Línea negra separadora -->
          <hr class="separator" />
  
          <!-- Formulario de comentarios -->
          <div class="comment-form">
            <div class="form-left">
              <div class="form-group">
                <label for="title">Título</label>
                <input type="text" id="title" v-model="comment.title" placeholder="Ingresa un título" />
              </div>
              <div class="form-group">
                <label for="content">Contenido</label>
                <textarea
                  id="content"
                  v-model="comment.content"
                  placeholder="Escribe tu comentario"
                ></textarea>
              </div>
            </div>
            <div class="form-right">
              <div class="form-group">
                <label for="alias">Alias</label>
                <input type="text" id="alias" v-model="comment.alias" placeholder="Tu alias" />
              </div>
              <div class="form-group">
                <label for="email">Correo</label>
                <input type="email" id="email" v-model="comment.email" placeholder="Tu correo electrónico" />
              </div>
            </div>
          </div>
  
          <!-- Botones de enviar y cancelar -->
          <div class="form-buttons">
            <button class="btn-submit" @click="submitComment">Enviar</button>
            <button class="btn-cancel" @click="resetForm">Cancelar</button>
          </div>
  
          <!-- Calificación con estrellas -->
          <div class="rating-section">
            <h2>Califica este producto</h2>
            <div class="stars">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ active: star <= comment.rating }"
                @click="setRating(star)"
              >
                ★
              </span>
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
        // Datos de ejemplo para el producto
        product: {
          name: "Zapatos Deportivos",
          description:
            "Zapatos deportivos de alta calidad, ideales para correr o entrenar. Diseño moderno y cómodo.",
          image: "https://via.placeholder.com/300x300",
        },
        // Datos del comentario
        comment: {
          title: "",
          content: "",
          alias: "",
          email: "",
          rating: 0,
        },
      };
    },
    methods: {
      // Método para establecer la calificación con estrellas
      setRating(rating) {
        this.comment.rating = rating;
      },
      // Método para enviar el comentario
      submitComment() {
        alert("Comentario enviado: " + JSON.stringify(this.comment));
        this.resetForm();
      },
      // Método para resetear el formulario
      resetForm() {
        this.comment = {
          title: "",
          content: "",
          alias: "",
          email: "",
          rating: 0,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .contenedor-opinion {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-section {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .product-image {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-details {
    flex: 1;
  }
  
  .product-name {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .product-description {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }
  
  .separator {
    border: 1px solid #000;
    margin: 20px 0;
  }
  
  .comment-form {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .form-left,
  .form-right {
    flex: 1;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    height: 100px;
    resize: vertical;
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  
  .btn-submit,
  .btn-cancel {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .btn-submit {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-cancel {
    background-color: #dc3545;
    color: #fff;
  }
  
  .rating-section {
    text-align: center;
    margin-top: 20px;
  }
  
  .stars {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .star {
    font-size: 2.5rem;
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s ease;
  }
  
  .star.active {
    color: gold;
  }
  
  @media (max-width: 768px) {
    .product-section {
      flex-direction: column;
      text-align: center;
    }
  
    .comment-form {
      flex-direction: column;
    }
  
    .form-buttons {
      justify-content: center;
    }
  }
  </style>