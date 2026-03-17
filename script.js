// Accordion toggle
function toggleAccordion(id) {
    const el = document.getElementById(id);
    const btn = el.previousElementSibling;
    el.classList.toggle('open');
    btn.classList.toggle('accordion-open');
}

// Intersection Observer for fade-up
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Vimeo Video Player Custom Overlay
function playVimeoVideo() {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('vimeo-player');

    if (overlay && iframe) {
        // Fade out overlay and remove pointer events
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => overlay.style.display = 'none', 500);

        // Play the Vimeo video using their official API
        const player = new Vimeo.Player(iframe);
        player.play().catch(function (error) {
            console.error('Error playing video:', error);
        });
    }
}
