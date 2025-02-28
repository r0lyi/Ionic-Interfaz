<template>
  <ion-header>
    <div class="banner">
      <p>¡Últimas noticias! Suscríbete para recibir actualizaciones.</p>
      <p>
        <a href="" class="login-button">Busca una tienda</a> |
        <a href="" class="login-button">Conocenos</a>   |
        <a href="/Register" class="login-button">Register</a>   |
        <a href="/Login" class="login-button">Login</a>   |

      </p>
    </div>

    <ion-toolbar>
      <div class="contenedor-menu">
        <!-- Menú de hamburguesa (solo visible en móviles) -->
        <div class="hamburguesa" @click="toggleMenu">
          <ion-icon :icon="menuOutline"></ion-icon>
        </div>

        <!-- Título (centrado en móviles) -->
        <div class="left">
        <img src="/images/Logo Migos.png" alt="Logo" class="logo">
        </div>

        <!-- Menú de opciones (oculto en móviles, visible en desktop) -->
        <div class="menu-opciones" :class="{ 'active': menuActive }">
          <ion-button @click="navigateTo('/Deportes')" fill="clear" class="menu-button">
            <ion-label>Deportes</ion-label>
          </ion-button>
          <ion-button @click="navigateTo('/Hombre')" fill="clear" class="menu-button">
            <ion-label>Hombre</ion-label>
          </ion-button>
          <ion-button @click="navigateTo('/Mujer')" fill="clear" class="menu-button">
            <ion-label>Mujer</ion-label>
          </ion-button>
          <ion-button @click="navigateTo('/Ofertas')" fill="clear" class="menu-button">
            <ion-label>Ofertas</ion-label>
          </ion-button>
        </div>

        <!-- Buscador e iconos (derecha) -->
        <div class="right">
          <div class="buscador">
            <template v-if="searchExpanded">

              <Buscador ></Buscador>
            </template>
            <template v-else>
              <ion-button @click="toggleSearch" fill="clear">
                <ion-icon :icon="searchOutline"></ion-icon>
              </ion-button>
            </template>
          </div>

          <div class="iconos">
            <ion-button @click="navigateTo('/gustos')" fill="clear" class="icon-button">
              <ion-icon :icon="heartOutline" class="icon"></ion-icon>
            </ion-button>
            <ion-button @click="navigateTo('/carrito')" fill="clear" class="icon-button">
              <ion-icon :icon="cartOutline" class="icon"></ion-icon>
            </ion-button>
            <ion-button @click="navigateTo('/user')" fill="clear" class="icon-button">
              <ion-icon :icon="personOutline" class="icon"></ion-icon>
            </ion-button>
          </div>
        </div>
        
      </div>
      <div class="submenu">
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :navigation="true"
    :modules="modules"
    class="submenu-swiper"
  >
    <swiper-slide v-for="(phrase, index) in submenuPhrases" :key="index">
      <span class="submenu-phrase">{{ phrase }}</span>
    </swiper-slide>
  </swiper>
</div>

     
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Buscador from '@/components/Buscador.vue';

import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonSearchbar, IonLabel } from '@ionic/vue';
import { heartOutline, cartOutline, personOutline, searchOutline, menuOutline } from 'ionicons/icons';

export default {
  
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonLabel,
    Buscador,Swiper, SwiperSlide
  },
  data() {
    return {
      submenuPhrases: [' Únete a nuestros eventos deportivos y vive la pasión del deporte en grupo', 
      'Crea tu estilo único con nuestra personalización de equipamiento', 
      'Encuentra ropa deportiva de calidad a precios irresistibles',
       'escubre todo lo que necesitas para tu deporte favorito en un solo lugar'],
      heartOutline,
      cartOutline,
      personOutline,
      searchOutline,
      menuOutline,
      searchExpanded: false,
      menuActive: false, // Controla si el menú de hamburguesa está activo
    };
  },
  mounted() {
    if (window.innerWidth > 768) {
      this.searchExpanded = true;
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
      this.menuActive = false; // Cierra el menú al navegar
    },
    toggleSearch() {
      this.searchExpanded = !this.searchExpanded;
    },
    toggleMenu() {
      this.menuActive = !this.menuActive; // Abre/cierra el menú de hamburguesa
    }
  }
};
</script>

<style scoped>


/* Contenedor del submenú */
.submenu {
  width: 100%;
  padding: 10px 0;
  background: #ffffff; /* Fondo blanco */
  border-top: 2px solid #1e3a8a; /* Borde superior azul oscuro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Slider Swiper */
.submenu-swiper {
  width: 100%;
  height: 40px; /* Altura del slider */
  position: relative;
}

/* Diapositivas */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Frases dentro del slider */
.submenu-phrase {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a; /* Azul oscuro */
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.submenu-phrase:hover {
  color: #2b528f; /* Azul más claro al pasar el mouse */
}

/* Botones de navegación (flechas) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #1e3a8a; /* Azul oscuro */
  width: 30px;
  height: 30px;
  background: #ffffff; /* Fondo blanco */
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, color 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #1e3a8a; /* Fondo azul oscuro al pasar el mouse */
  color: #ffffff; /* Icono blanco */
}

/* Estilo para las flechas dentro de los botones */
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 1.5rem;
}

/* Responsividad */
@media (max-width: 768px) {
  .submenu-swiper {
    height: 30px; /* Reducir altura en pantallas pequeñas */
  }
  .submenu-phrase {
    font-size: 1rem; /* Tamaño de fuente más pequeño */
  }
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 25px;
    height: 25px;
  }
  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .submenu-phrase {
    font-size: 0.9rem; /* Aún más pequeño para móviles */
  }
}
/* Banner Superior */
.banner {
  background-color: rgb(25, 25, 32);
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
}

.banner p {
  margin: 0;
}





/* Contenedor del Menú */
.contenedor-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-image:url('https://img.freepik.com/vector-gratis/fondo-abstracto-azul_1393-339.jpg');
  background-size: cover; /* Cubre todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-attachment: fixed; /* Fija la imagen al desplazarse (opcional) */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 4em;
}

/* Título */
.left {
  display: flex;
  align-items: center;
}
.left img.logo {
  max-width: 150px; /* Tamaño máximo del logo en desktop */
  height: auto; /* Mantiene la proporción de la imagen */
  transition: transform 0.3s ease; /* Efecto de transición al hacer hover */
}

/* Efecto al pasar el mouse sobre el logo */
.left img.logo:hover {
  transform: scale(1.05); /* Escala ligeramente el logo al hacer hover */
}
/* Menú de hamburguesa (oculto en desktop) */
.hamburguesa {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #003366;
}

/* Menú Opciones */
.menu-opciones {
  display: flex;
  gap: 20px;
}

.menu-button {
  position: relative;
  padding: 10px 0;
  color: #003366;
  font-size: 1.1em;
}

.menu-button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #007BFF;
  transition: width 0.3s ease;
}

.menu-button:hover::after {
  width: 100%;
}

/* Buscador */
.right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.buscador {
margin-right: 20px;
  width: 230px;
}

/* Iconos */
.iconos {
  margin-right: 20px;
  display: flex;
  gap: 10px;
}

.icon-button {
  --padding-start: 0;
  --padding-end: 0;
}

.icon {
  font-size: 2em;
  color: #ffffff;
  transition: color 0.3s ease;
}

.icon-button:hover .icon {
  color: #007BFF;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    align-items: center;
    padding: 5px;
    font-size: 12px;
  }

  .login-button {
    margin-top: 5px;
    padding: 3px 10px;
    font-size: 12px;
  }

  .contenedor-menu {
    padding: 0 10px;
  }

  .hamburguesa {
    display: block; /* Muestra el ícono de hamburguesa */
  }

  .menu-opciones {
    display: none; /* Oculta el menú en móviles por defecto */
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .menu-opciones.active {
    display: flex; /* Muestra el menú cuando está activo */
  }

  .menu-button {
    width: 100%;
    text-align: left;
    padding: 10px 20px;
  }

  .right {
    margin-left: auto; /* Mueve el buscador e iconos a la derecha */
  }

  .buscador {
    width: 100%;
  }

  .icon {
    font-size: 20px;
  }

  .left img.logo {
    max-width: 120px; /* Tamaño más pequeño para tablets */
  }

}
@media (max-width: 480px) {
  .left img.logo {
    max-width: 100px; /* Tamaño más pequeño para móviles */
  }
}
</style>