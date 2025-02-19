<template>
  <div class="contenido">
    <div 
      class="card eventos" 
      @click="navigateTo('/Eventos')"
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
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.contenido {
  display: flex;
    align-items: center;
    justify-content:space-evenly;
  gap: 2rem;
  padding: 1rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.card {
  width: 40em;
  height: 50em;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.02);
}

.titulo {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.eventos {
  background: url('https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg') center/cover no-repeat;
}

.personal {
  background: url('https://cdn.pixabay.com/photo/2019/11/02/16/53/football-4596824_1280.jpg') center/cover no-repeat;
}

.salud {
  background: url('https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg') center/cover no-repeat;
}

/* Responsive */
@media (max-width: 600px) {
  .card {
    width: 90%;
    height: 600px;
  }
  
  .titulo {
    font-size: 2rem;
    bottom: 20px;
    left: 20px;
  }
}
</style>