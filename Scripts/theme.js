// Cria as variáveis para o botão e o elemento HTML
const btnTema = document.getElementById('botao-tema');
const htmlElement = document.documentElement; // Seleciona a tag <html>

// Verifica se há um tema salvo no localStorage
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    btnTema.innerText = '☾';
}

// Evento do clique no botão para alternar o tema
btnTema.addEventListener('click', () => {
    // Verifica qual é o tema atual
    const temaAtual = htmlElement.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        // Se estiver escuro, muda para claro
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('tema', 'light');
        btnTema.innerText = '☼';
    } else {
        // Se estiver claro, muda para escuro
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
        btnTema.innerText = '☾';
    }
}); 