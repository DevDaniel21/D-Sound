const playDisplay = document.getElementById('play-display');
const pauseDisplay = document.getElementById('pause-display')
const playGrande = document.getElementById('playGrande');
const pauseGrande = document.getElementById('pauseGrande')

const audioAtual = document.getElementById('audioAtual');
const capaAtual = document.getElementById('capaAtual');
const tituloAtual = document.getElementById('tituloAtual');
const autorAtual = document.getElementById('autorAtual');

const container = document.getElementById('container');

const capaGrande = document.getElementById('capaGrande');
const autorGrande = document.getElementById('autorGrande');
let tituloGrande = document.getElementById('tituloGrande')
const tempoFinal = document.getElementById('tempoFinal');

const musica = document.getElementById('musicaGrande');

let musicaAberta = false;

function tocarMusica() {
    if (audioAtual.src != null) {
        audioAtual.play();

        playDisplay.style.display = "none";
        playGrande.style.display = "none";
        pauseDisplay.style.display = "block";
        pauseGrande.style.display = "block";
    }
}

function pausarMusica() {
    audioAtual.pause();
    playDisplay.style.display = "block";
    playGrande.style.display = "block";
    pauseDisplay.style.display = "none";
    pauseGrande.style.display = "none";
}

function musicaEscolhida(musica) {
        capaGrande.style.backgroundImage = musica.capa;
        tituloGrande.innerHTML = musica.titulo;
        autorGrande.innerHTML = musica.autor;
        audioAtual.src = musica.audio;

        audioAtual.src = musica.audio;
        capaAtual.style.backgroundImage = musica.capa;
        tituloAtual.innerHTML = musica.titulo;
        autorAtual.innerHTML = musica.autor;
}

function trocarMusica(musica) {
    // let musica = musica;
    musicaEscolhida(musica);
    tocarMusica();
}

function abrirMusica() {
    if (musicaAberta == false) {
        musicaGrande.style.display = "flex"
        container.style.display = "none"
        musicaAberta = true
    }
}

function fecharMusica() {
    if (musicaAberta == true) {
        musicaGrande.style.display = "none"
        container.style.display = "flex"
        musicaAberta = false
    }
}