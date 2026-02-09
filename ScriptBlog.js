document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REVEAL ON SCROLL (Animación de aparición)
    // Detecta cuando los elementos con la clase .reveal entran en pantalla
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100; // Margen para que se active

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    // Ejecutar al hacer scroll y una vez al cargar por si hay elementos ya visibles
    window.addEventListener("scroll", reveal);
    reveal();

    // 2. NAVEGACIÓN FLUIDA (Smooth Scroll)
    // Funciona para los enlaces internos (ej: #contacto)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Solo actuar si el enlace es a una sección de la misma página
            if (targetId.startsWith('#') && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Cerrar menú móvil automáticamente si está abierto
                    const menu = document.getElementById('navbarNav');
                    if (menu && menu.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(menu);
                        if (bsCollapse) bsCollapse.hide();
                    }
                }
            }
        });
    });

    // 3. BARRA DE NAVEGACIÓN (Efecto de transparencia al bajar)
    const navbar = document.querySelector('.navbar-apple');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.05)";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(255, 255, 255, 0.85)";
        }
    });
});