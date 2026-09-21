// 1. Seleciona o botão e o corpo da página
const btnTema = document.getElementById('botao-tema');
const htmlElement = document.documentElement; // Seleciona a tag <html>

// 2. Verifica se o usuário já tinha uma preferência salva no navegador
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    btnTema.innerText = '☾'; // Muda o ícone para lua se estiver escuro
}

// 3. Adiciona o evento de clique
btnTema.addEventListener('click', () => {
    // Verifica qual é o tema atual
    const temaAtual = htmlElement.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        // Se estiver escuro, muda para claro
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('tema', 'light');
        btnTema.innerText = '☼'; // Ícone de sol
    } else {
        // Se estiver claro, muda para escuro
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
        btnTema.innerText = '☾'; // Ícone de lua
    }
}); 