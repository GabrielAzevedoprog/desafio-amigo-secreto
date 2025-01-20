//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let escolhido = Math.floor(Math.random * amigos.length) + 1;

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}
function limparResultado(){
    let resultadoAmigos = document.getElementById('resultado');
        resultadoAmigos.innerHTML = '';
}
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        console.log(amigos);
        limparCampo();
        limparResultado();
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = amigos;
    }
}

function sortearAmigo() {
    if ( amigos.length > 1) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let resultadoAmigos = document.getElementById('resultado');
        resultadoAmigos.innerHTML = amigos[indiceAleatorio];
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos = [];
    } else {
        alert('Informe no minimo dois amigos para sortear!')
    }
}
