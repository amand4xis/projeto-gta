/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo dela apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    Passo 1 - vereficar se o botão já esta aberto, se sim, devemos remover a classe ativo para que esconda o conteúdo novamente


*/

const botao =  document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector("bnt-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
});
