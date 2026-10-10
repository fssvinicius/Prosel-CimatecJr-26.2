// Seleciona todos os itens da lista que têm o atributo data-modal
const itensLista = document.querySelectorAll('[data-modal]');
const botoesFechar = document.querySelectorAll('.fechar-modal');

// Abrir o modal correspondente
itensLista.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
        }
    });
});

// Fechar qualquer modal ao clicar no X
botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
        const modal = botao.closest('.modal');
        modal.style.display = "none";
    });
});

// Fechar ao clicar fora da caixa do modal
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = "none";
        });
    }
});