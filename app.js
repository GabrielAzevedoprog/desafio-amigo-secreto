//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function inserirTexto(tag, texto) {
    campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        console.log(amigos);
        let campoTexto = document.querySelector('input');
        campoTexto.value = '';
        inserirTexto('resultado', '')
        inserirTexto('listaAmigos',amigos)        
    }
}
function sortearAmigo() {
    if ( amigos.length > 1) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        inserirTexto('resultado', 'O amigo sorteado é: ' + amigos[indiceAleatorio] )
        inserirTexto('listaAmigos', '')
        amigos = [];
    } else {
        alert('Informe no minimo dois amigos para sortear!')
    }
}
