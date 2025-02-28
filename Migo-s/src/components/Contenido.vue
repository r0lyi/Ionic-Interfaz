<template>
  <div class="contenido">
    <div 
      class="card eventos" 
      @click="navigateTo('/Evento')"
    >
      <h2 class="titulo">Eventos</h2>
    </div>
    <div 
      class="card personal" 
      @click="navigateTo('/Personal')"
    >
      <h2 class="titulo">Personal</h2>
    </div>
    <div 
      class="card salud" 
      @click="navigateTo('/Salud')"
    >
      <h2 class="titulo">Salud</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.contenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  height: 25em;
  background: #0f0f0f;
}

/* Estilo de las tarjetas */
.card {
  flex: 1 1 30%; /* Cada panel ocupa un tercio del ancho en pantallas grandes */
  min-width: 300px;
  height: 400px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

/* Título dentro de las tarjetas */
.titulo {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

/* Estilos específicos de cada tarjeta */
.eventos {
  border: 3px solid #3b82f6;
  background: url('https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg') center/cover no-repeat;
}

.personal {
  border: 3px solid #3b82f6;
  background: url('https://cdn.pixabay.com/photo/2019/11/02/16/53/football-4596824_1280.jpg') center/cover no-repeat;
}

.salud {
  border: 3px solid #3b82f6;
  background: url('https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg') center/cover no-repeat;
}

/* Diseño Responsivo */
@media (max-width: 1200px) {
  .card {
    flex: 1 1 45%; /* Dos tarjetas por fila en pantallas grandes-medias */
    min-width: 280px; /* Ligeramente más estrecho */
  }
}

@media (max-width: 768px) {
  .contenido {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem; /* Reduce el padding ligeramente */
  }

  .card {
    flex: 1 1 100%; /* Una tarjeta por fila */
    min-width: 0; /* Permite que se ajuste al contenedor */
    width: 100%;
    height: 350px;
  }

  .titulo {
    font-size: 2rem;
    bottom: 20px;
    left: 20px;
  }
}

@media (max-width: 480px) {
  .contenido {
    padding: 1rem; /* Más compacto */
    gap: 1.5rem; /* Reduce el espacio entre tarjetas */
  }

  .card {
    height: 300px;
  }

  .titulo {
    font-size: 1.5rem;
    bottom: 15px;
    left: 15px;
    padding: 8px 15px;
  }
}

@media (max-width: 360px) {
  .card {
    height: 250px; /* Más pequeño para móviles muy chicos */
  }

  .titulo {
    font-size: 1.25rem;
    bottom: 10px;
    left: 10px;
    padding: 6px 12px;
  }
}
</style>