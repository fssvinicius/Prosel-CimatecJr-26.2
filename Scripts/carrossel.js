const carousel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel img');

const scrollCarousel = (element, direction) => {
    const item = element.firstElementChild;
    if (!item) {
        return;
    }

    const step = item.offsetWidth + 24;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const isAtStart = element.scrollLeft <= 1;
    const isAtEnd = element.scrollLeft >= maxScroll - 1;

    if (direction > 0 && isAtEnd) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && isAtStart) {
        element.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
        element.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
};

document.querySelectorAll('.controle-carrossel').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.carouselTarget);
        if (target) {
            scrollCarousel(target, button.classList.contains('proximo') ? 1 : -1);
        }
    });
});

if (carousel && images.length) {
    let currentIndex = 0;

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.scrollTo({ left: currentIndex * (images[0].offsetWidth + 16), behavior: 'smooth' });
    };

    carousel.addEventListener('wheel', event => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault();
        }
    }, { passive: false });

    setInterval(nextImage, 3000);
}