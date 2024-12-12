let jogosAlugados = 0;
//auto-explicativo. Quantos jogos estão alugados

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
//cria a função para contar e exibir os jogos alugados, e mostra no console quantos jogos foram alugados


function alterarStatus(id) {
let jogoAlterar = document.getElementById(`game-${id}`);
//recupera o jogo que foi clicado (alugado ou não)

let imagem = jogoAlterar.querySelector('.dashboard__item__img');
//basicamente: variável jogoAlterar procura um elemento(querySelector) com classe (.) chamado "dashboard__item__img" (na tag <li>, <div>)

let botao = jogoAlterar.querySelector('.dashboard__item__button');
//o mesmo do de cima, só que agora é o botão na tag <a>

let nome = jogoAlterar.querySelector('.dashboard__item__name');
//o mesmo, agora o nome na tag <p>

//alert(nome.textContent)
//alerta, confere se o botão e suas funções estão ativas

if (imagem.classList.contains('dashboard__item__img--rented')) {
    //se a imagem na lista(puxada do HTML com o querySelector) possuir a classe 'dashboard__item__img--rented',

    if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}?`));
    //pede confirmação se quer devolver o jogo

    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    jogosAlugados--;
    //remove o estado '--rented' e '--return' e volta o texto para "Alugar", e remove um jogo da lista dos alugados

} else {
    if (confirm(`Você tem certeza que deseja alugar o jogo ${nome.textContent}?`));
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    jogosAlugados++;
    
    //se não, o contrário acontece. Adiciona os estados removidos e volta o texto para "Devolver" e adiciona um jogo na lista dos alugados
}
contarEExibirJogosAlugados();
//função já descrita no começo do código
}
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});