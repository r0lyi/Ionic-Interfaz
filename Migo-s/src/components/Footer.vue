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
            &copy; migos.com | Diseñado por MIgos
        </div>
    </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
    background: #333;
    color: #fff;
    height: auto;
    position: relative;
    bottom: 0;
    width: 100%;
    padding-top: 40px;
}

.footer .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
}

.footer .footer-section {
    flex: 1;
    padding: 10px;
}

.footer .logo-text {
    font-size: 1.8rem;
    font-weight: 600;
}

.footer .contact span {
    display: block;
    margin: 10px 0;
}

.footer .socials a {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
}

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

.footer .footer-bottom {
    background: #222;
    color: #fff;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
</style>