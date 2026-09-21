// Carrossel de imagens
const carousel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel img');
let currentIndex = 0;

const scrollToImage = (index) => {
    const imageWidth = images[0].offsetWidth + 15; // 15px é o gap
    carousel.scrollLeft = index * imageWidth;
};

const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    scrollToImage(currentIndex);
};

// Impede que o gesto horizontal do touchpad altere o slide atual.
carousel.addEventListener('wheel', event => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
    }
}, { passive: false });

// Muda a imagem automaticamente a cada 3 segundos
setInterval(nextImage, 3000);