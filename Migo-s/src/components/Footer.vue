<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text"><span>MIgos</span> Deportes</h1>
        <p>
          MIgos es tu tienda de deportes online, donde encontrarás los mejores productos y ofertas.
        </p>
        <div class="contact">
          <span><i class="fas fa-phone"></i> &nbsp; +123-456-789</span>
          <span><i class="fas fa-envelope"></i> &nbsp; info@migos.com</span>
        </div>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-section links">
        <h2>Links Rápidos</h2>
        <br>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Política de Privacidad</a></li>
        </ul>
      </div>

      <div class="footer-section contact-form">
        <h2>Contáctanos</h2>
        <br>
        <form action="index.html" method="post">
          <input type="email" name="email" class="text-input contact-input" placeholder="Tu email...">
          <textarea name="message" class="text-input contact-input" placeholder="Tu mensaje..."></textarea>
          <button type="submit" class="btn btn-big">
            <i class="fas fa-envelope"></i>
            Enviar
          </button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      © migos.com | Diseñado por MIgos
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* Footer general */
.footer {
  background: #333;
  color: #fff;
  height: auto;
  position: relative;
  bottom: 0;
  width: 100%;
  padding-top: 40px;
}

/* Contenido del footer */
.footer .footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
}

/* Secciones del footer */
.footer .footer-section {
  flex: 1;
  padding: 10px;
}

/* Logo */
.footer .logo-text {
  font-size: 1.8rem;
  font-weight: 600;
}

/* Contacto */
.footer .contact span {
  display: block;
  margin: 10px 0;
}

/* Redes sociales */
.footer .socials a {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
}

/* Links rápidos */
.footer .links ul {
  list-style: none;
}

.footer .links ul li {
  margin: 10px 0;
}

.footer .links ul li a {
  text-decoration: none;
  color: #fff;
}

/* Formulario de contacto */
.footer .contact-form .text-input {
  background: #333;
  border: 1px solid #fff;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  color: #fff;
}

.footer .contact-form .btn {
  background: #ff523b;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
}

/* Parte inferior del footer */
.footer .footer-bottom {
  background: #222;
  color: #fff;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

/* Diseño Responsivo */
@media (max-width: 1024px) {
  .footer .footer-content {
    padding: 20px 5%; /* Reduce el padding lateral */
  }

  .footer .footer-section {
    padding: 8px; /* Ligeramente más compacto */
  }
}

@media (max-width: 768px) {
  .footer .footer-content {
    flex-direction: column; /* Apila las secciones verticalmente */
    align-items: flex-start;
    padding: 15px 5%;
  }

  .footer .footer-section {
    width: 100%; /* Ocupa todo el ancho */
    padding: 10px 0; /* Ajusta el padding */
  }

  .footer .logo-text {
    font-size: 1.6rem; /* Reduce ligeramente el tamaño del logo */
  }

  .footer .contact-form .text-input {
    padding: 8px; /* Reduce el padding de los inputs */
  }

  .footer .contact-form .btn {
    padding: 8px 16px; /* Botón más pequeño */
  }
}

@media (max-width: 480px) {
  .footer {
    padding-top: 30px; /* Reduce el padding superior */
  }

  .footer .footer-content {
    padding: 10px 3%; /* Más compacto */
  }

  .footer .logo-text {
    font-size: 1.4rem;
  }

  .footer .contact span {
    margin: 8px 0; /* Reduce el margen */
    font-size: 0.9rem; /* Texto más pequeño */
  }

  .footer .socials a {
    margin: 0 8px; /* Reduce el espacio entre íconos */
  }

  .footer .links ul li {
    margin: 8px 0; /* Reduce el margen entre links */
  }

  .footer .links ul li a {
    font-size: 0.9rem; /* Texto más pequeño */
  }

  .footer .contact-form .text-input {
    padding: 6px;
    font-size: 0.9rem;
  }

  .footer .contact-form .btn {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .footer .footer-bottom {
    height: 40px; /* Reduce la altura */
    line-height: 40px;
    font-size: 0.85rem; /* Texto más pequeño */
  }
}

@media (max-width: 360px) {
  .footer .logo-text {
    font-size: 1.2rem;
  }

  .footer .contact span {
    font-size: 0.85rem;
  }

  .footer .socials a {
    margin: 0 6px;
  }

  .footer .links ul li a {
    font-size: 0.85rem;
  }

  .footer .contact-form .text-input {
    padding: 5px;
    font-size: 0.85rem;
  }

  .footer .contact-form .btn {
    padding: 5px 10px;
    font-size: 0.85rem;
  }
}
</style>