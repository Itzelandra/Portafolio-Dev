document.addEventListener('DOMContentLoaded', () => {
    
    // Revelado al hacer scroll
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    // Navegación fluida
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Cerrar menú móvil
                const menu = document.getElementById('navbarNav');
                if (menu.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(menu).hide();
                }
            }
        });
    });
});