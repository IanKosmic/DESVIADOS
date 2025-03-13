document.addEventListener('DOMContentLoaded', () => {
    // Animación de elementos al entrar en el viewport
    const elements = document.querySelectorAll('.concert, .featured');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

    // Reproducción automática de todos los videos al cargar la página
    const videos = document.querySelectorAll('.concert-video');
    videos.forEach((video) => {
        video.play().catch(error => {
            console.log('Error al reproducir el video automáticamente:', error);
        });
    });
});
