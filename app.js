//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}
function adicionarAmigo() {
    let amigo = document.querySelector('input');

    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        console.log(amigos);
        limparCampo();
    }
}
