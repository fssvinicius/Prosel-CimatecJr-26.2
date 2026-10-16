# Processo Seletivo CimatecJR 26.2
> Landing Page com a temática de Produto Inusitado.

---

## 📄 Informações do Candidato
- **Nome completo:** Vinícius Fernandes Souza Silva
- **Semestre:** 2º Semestre

---

## 📖 Sobre o Projeto
Esta Landing Page foi criada com a temática de vender um produto inusitado e inesperado, com o intuito de estimular a criatividade e a liberdade durante a realização da página. O produto escolhido foi ar em conserva, por ser algo que pode ser usado para criar uma grande quebra de expectativa, trazendo um significado novo para algo que parece inútil.

🚀 **[Clique aqui para acessar o site ao vivo](https://prosel-cimatecjr-262.vercel.app)**

---

## 🎨 Design (Figma)
O projeto foi baseado em um protótipo focado em acessibilidade e clareza visual.

🔗 **[Visualizar Protótipo no Figma](https://www.figma.com/site/Py1h6FwOI8MP9f6hY4BxrA/Sem-t%C3%ADtulo?node-id=0-1&t=M1o7IqXeC84IK0yf-1)**

---

## 🛠️ Tecnologias Utilizadas
O site foi construído utilizando tecnologias web fundamentais (Vanilla Stack), garantindo performance e leveza:

* **HTML5**: Estrutura semântica das páginas.
* **CSS3**: Estilização moderna, Flexbox/Grid e suporte para **Modo Escuro (Dark Mode)**.
* **JavaScript**: Manipulação de DOM para menus interativos, modais e troca de temas.

---

## 📁 Estrutura de Arquivos e Pastas

Para que o projeto funcione corretamente (carregamento de imagens, folha de estilos e scripts), certifique-se de manter a seguinte estrutura de diretórios:

```text
retrospectAR/
├── assets/                  # Imagens utilizadas no carrossel e catálogo
│   ├── carrossel1.jpg
│   ├── carrossel2.jpg
│   ├── carrossel3.jpg
│   ├── produto.jpg
│   ├── catalogo1.jpg
│   ├── catalogo2.jpg
│   ├── catalogo3.jpg
│   ├── catalogo4.jpg
│   ├── catalogo5.jpg
│   └── catalogo6.jpg
├── Pages/
│   └── Home/                # Página principal da aplicação
│       ├── index.html       # Estrutura HTML da home
│       └── style.css        # Estilização global e controle de temas
├── Scripts/                 # Arquivos de lógica em JavaScript
│   ├── theme.js
│   ├── modal.js
│   └── carrossel.js
└── README.md                # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para clonar o repositório e executar a aplicação em sua máquina.

### Pré-requisitos

Você precisará ter instalado em sua máquina:
- Um navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
- [Git](https://git-scm.com) (para clonar o repositório).
- [VS Code](https://code.visualstudio.com/) *(opcional, mas recomendado)*.

---

### Passo 1: Clonar o Repositório

Abra o terminal ou prompt de comando na sua máquina e rode o comando:

```bash
git clone https://github.com/fssvinicius/Prosel-CimatecJr-26.2.git
```

Navegue até a pasta do projeto:

```bash
cd Prosel-CimatecJr-26.2
```

---

### Passo 2: Executar a Aplicação

Como o **retrospectAR** é um projeto estático, existem diferentes formas de rodá-lo:

#### Opção A: Usando o VS Code + Live Server (Recomendado)
1. Abra a pasta do projeto no VS Code:
   ```bash
   code .
   ```
   (Caso o terminal retorne um erro informando que o comando não foi encontrado, basta abrir o VS Code manualmente e usar o menu Arquivo > Abrir Pasta.)
2. Caso não tenha, instale a extensão **Live Server** (desenvolvida por *Ritwick Dey*).
3. No navegador de arquivos do VS Code, navegue até a pasta Pages/Home/.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5. O navegador será aberto automaticamente na porta local (geralmente `http://127.0.0.1:5500`).

#### Opção B: Servidor Local via Terminal (Python / Node.js)
Se você possui Python ou Node instalado, pode subir um servidor local rápido:

- **Com Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Acesse `http://localhost:8000/Pages/Home/` no navegador.

- **Com Node.js (npx):**
  ```bash
  npx serve .
  ```
  Acesse o link gerado pelo terminal e navegue até a pasta Pages/Home/.

#### Opção C: Abertura Direta no Navegador
1. Abra o gerenciador de arquivos do seu sistema operacional.
2. Navegue até a pasta Pages/Home/ dentro do projeto.
3. Dê dois cliques no arquivo `index.html`.

---