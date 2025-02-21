<template>
    <div class="banner">
      <p>¡Últimas noticias! Suscríbete para recibir actualizaciones.</p>
    <a href="/Login"> <p  >Login</p></a> 
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #ff4500;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1000;
}
  </style>