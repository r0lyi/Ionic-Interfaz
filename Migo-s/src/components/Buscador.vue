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
import { IonIcon } from '@ionic/vue';
import { searchOutline } from 'ionicons/icons';

export default {
  components: {
    IonIcon,
  },
  data() {
    return {
      searchOutline,
      showSearch: false,
      searchQuery: "",
      frequentOptions: ["Zapatillas", "Camisetas", "Pantalones", "Accesorios", "Ofertas"],
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    setSearchQuery(option) {
      this.searchQuery = option;
      this.performSearch();
    },
    performSearch() {
      console.log("Buscando:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Botón de búsqueda */
.search-button {
  background-color: rgb(47, 46, 61);
  border-radius: 20px;
  cursor: pointer;
  gap: 20px;
  display: flex;
  align-items: center;
  width: 15em;
}

/* Texto del botón */
.search-text {
  color: #f5f5f5;
  font-size: 1.4em;
}

/* Ícono de búsqueda */
.search-icon {
  margin-left: 10px;
  font-size: 2em;
  color: #007bff;
}

/* Panel de búsqueda */
.search-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #003366;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

/* Contenedor de la barra de búsqueda */
.search-container {
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
}

/* Input de búsqueda */
.search-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.search-input::placeholder {
  color: #007bff;
}

/* Botón de cierre */
.close-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
}

/* Opciones frecuentes */
.frequent-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap; /* Permite que los botones se ajusten en varias líneas */
}

/* Botones de opciones frecuentes */
.frequent-button {
  background-color: white;
  color: #003366;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.frequent-button:hover {
  background-color: #e0e0e0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .search-button {
    width: 12em; /* Reduce el ancho en tablets */
  }

  .search-container {
    max-width: 500px; /* Ajusta la barra de búsqueda */
  }
}

@media (max-width: 768px) {
  .search-button {
    width: 10em; /* Más compacto */
    gap: 15px; /* Reduce el espacio entre elementos */
  }

  .search-text {
    font-size: 1.2em; /* Reduce ligeramente el texto */
  }

  .search-icon {
    font-size: 1.8em; /* Ajusta el ícono */
  }

  .search-panel {
    padding: 15px; /* Reduce el padding */
  }

  .search-container {
    max-width: 400px; /* Barra más estrecha */
  }

  .search-input {
    padding: 8px; /* Reduce el padding del input */
  }

  .close-button {
    font-size: 20px; /* Reduce el tamaño del botón de cierre */
  }

  .frequent-button {
    padding: 6px 12px; /* Botones más pequeños */
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .search-button {
    width: 8em; /* Más pequeño para móviles */
    gap: 10px;
  }

  .search-text {
    font-size: 1em;
  }

  .search-icon {
    margin-left: 5px;
    font-size: 1.5em;
  }

  .search-panel {
    padding: 10px;
  }

  .search-container {
    max-width: 100%; /* Ocupa todo el ancho disponible */
    padding: 0 10px;
  }

  .search-input {
    padding: 6px;
    font-size: 0.9rem;
  }

  .close-button {
    font-size: 18px;
    margin-left: 5px;
  }

  .frequent-options {
    gap: 5px; /* Reduce el espacio entre botones */
  }

  .frequent-button {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .search-button {
    width: 7em;
  }

  .search-text {
    font-size: 0.9em;
  }

  .search-icon {
    font-size: 1.3em;
  }

  .search-input {
    font-size: 0.85rem;
  }

  .frequent-button {
    padding: 4px 8px;
    font-size: 0.75rem;
  }
}
</style>