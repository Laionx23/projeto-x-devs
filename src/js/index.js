

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// btnAvancar.addEventListener("click", function (){
//     if (cartaoAtual === cartoes.length -1) return;

//     const cartaoSelecionado = document.querySelector(".selecionado");
//     cartaoSelecionado.classList.remove("selecionado");
    
//     cartaoAtual++;
//     cartoes[cartaoAtual].classList.add("selecionado");

// });

// btnVoltar.addEventListener("click", function (){
//     if (cartaoAtual === 0) return;
    
//     const cartaoSelecionado = document.querySelector(".selecionado");
//     cartaoSelecionado.classList.remove("selecionado");
    
//     cartaoAtual--;
//     cartoes[cartaoAtual].classList.add("selecionado");

// });

btnAvancar.addEventListener("click", function () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
    cartaoAtual = (cartaoAtual + 1) % cartoes.length;
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
    cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length;
    cartoes[cartaoAtual].classList.add("selecionado");
});

// codigo corrigido e aperfeiçoado pelo chatgpt //