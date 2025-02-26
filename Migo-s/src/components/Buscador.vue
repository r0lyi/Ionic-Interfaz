<template>
    <div>
      <!-- Botón de búsqueda en el menú -->
      <button class="search-button" @click="toggleSearch">
        🔍 Buscar
      </button>
  
      <!-- Panel de búsqueda -->
      <div v-if="showSearch" class="search-panel">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar..."
          class="search-input"
        />
        <button class="search-submit" @click="performSearch">
          Buscar
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSearch: false, // Controla la visibilidad del panel de búsqueda
        searchQuery: "", // Almacena el término de búsqueda
      };
    },
    methods: {
      // Alternar la visibilidad del panel de búsqueda
      toggleSearch() {
        this.showSearch = !this.showSearch;
      },
      // Realizar la búsqueda
      performSearch() {
        if (this.searchQuery.trim()) {
          alert(`Buscando: ${this.searchQuery}`);
          // Aquí puedes agregar la lógica para realizar la búsqueda
        } else {
          alert("Por favor, ingresa un término de búsqueda.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .search-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  .search-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 1000;
  }
  
  .search-input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .search-submit {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .search-submit:hover {
    background-color: #218838;
  }
  </style>