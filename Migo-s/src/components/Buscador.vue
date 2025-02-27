<template>
  <div>
    <!-- Botón de búsqueda en el menú -->
    <button class="search-button" @click="toggleSearch">
      <ion-icon :icon="searchOutline" class="search-icon"></ion-icon>
      <span class="search-text">Buscar</span>

    </button>

    <!-- Panel de búsqueda -->
    <div v-if="showSearch" class="search-panel">
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar productos..."
          class="search-input"
        />
        <button class="close-button" @click="toggleSearch">
          ✕
        </button>
      </div>
      <div class="frequent-options">
        <button
          v-for="option in frequentOptions"
          :key="option"
          class="frequent-button"
          @click="setSearchQuery(option)"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import { IonIcon } from '@ionic/vue'; // Importar IonIcon
import { searchOutline } from 'ionicons/icons'; // Importar el ícono de lupa
export default {

  components: {
    IonIcon, // Registrar el componente IonIcon
  },
  data() {
    return {
      searchOutline,
      showSearch: false, // Controla la visibilidad del panel de búsqueda
      searchQuery: "", // Almacena el término de búsqueda
      frequentOptions: ["Zapatillas", "Camisetas", "Pantalones", "Accesorios", "Ofertas"], // Opciones de búsqueda más populares
    };
  },
  methods: {
    // Alternar la visibilidad del panel de búsqueda
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    // Establecer el término de búsqueda desde las opciones frecuentes
    setSearchQuery(option) {
      this.searchQuery = option;
      this.performSearch();
    },
    // Realizar la búsqueda
    performSearch() {
      console.log("Buscando:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-button {
  background-color: rgb(47, 46, 61);
  border-radius: 20px;
  cursor: pointer;
  gap: 20px;
  display: flex;
  align-items: center;
  width: 15em;

}
.search-text {
  color: #f5f5f5; /* Texto azul */
  font-size: 1.4em;
}

.search-icon {
  margin-left: 10px;
  font-size: 2em;
  color: #007bff; /* Azul para el ícono */
}

.search-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #003366; /* Fondo azul oscuro */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

.search-container {
  display: flex;
  width: 100%;
  max-width: 600px; /* Barra de búsqueda larga */
  margin-bottom: 10px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #007bff; /* Borde azul */
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.search-input::placeholder {
  color: #007bff; /* Placeholder azul */
}

.close-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
}

.frequent-options {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.frequent-button {
  background-color: white; /* Botones blancos */
  color: #003366; /* Texto azul oscuro */
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.frequent-button:hover {
  background-color: #e0e0e0; /* Efecto hover sutil */
}


</style>

