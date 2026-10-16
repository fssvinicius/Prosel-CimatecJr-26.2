// Seleciona o elemento do carrossel e todas as imagens dentro dele
const carousel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel img');

// Função para rolar o carrossel
const scrollCarousel = (element, direction) => {
    // Pega o primeiro item do carrossel para calcular o passo de rolagem
    const item = element.firstElementChild;
    if (!item) {
        return;
    }

    // Calcula o passo de rolagem baseado na largura do item e um espaçamento adicional
    const step = item.offsetWidth + 24;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const isAtStart = element.scrollLeft <= 1;
    const isAtEnd = element.scrollLeft >= maxScroll - 1;

    // Rola o carrossel para a esquerda ou direita, ou volta ao início/fim se estiver no limite
    if (direction > 0 && isAtEnd) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && isAtStart) {
        element.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
        element.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
};

// Adiciona eventos de clique aos botões de controle do carrossel
document.querySelectorAll('.controle-carrossel').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.carouselTarget);
        if (target) {
            scrollCarousel(target, button.classList.contains('proximo') ? 1 : -1);
        }
    });
});

// Adiciona eventos de rolagem do mouse para o carrossel
if (carousel && images.length) {
    let currentIndex = 0;

    // Função para avançar para a próxima imagem no carrossel
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.scrollTo({ left: currentIndex * (images[0].offsetWidth + 16), behavior: 'smooth' });
    };

    // Previne a rolagem vertical quando o usuário rolar horizontalmente no carrossel
    carousel.addEventListener('wheel', event => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault();
        }
    }, { passive: false });

    // Inicia a rolagem automática do carrossel a cada 3 segundos
    setInterval(nextImage, 3000);
}