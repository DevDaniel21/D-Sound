const playDisplay = document.getElementById('play-display');
const pauseDisplay = document.getElementById('pause-display')

const audioAtual = document.getElementById('audioAtual');
const capaAtual = document.getElementById('capaAtual');
const tituloAtual = document.getElementById('tituloAtual');
const autorAtual = document.getElementById('autorAtual');

function tocarMusica() {
    if (audioAtual.src != null) {
        audioAtual.play();

        playDisplay.style.display = "none";
        pauseDisplay.style.display = "block";
    }
}

function pausarMusica() {
    audioAtual.pause();
    playDisplay.style.display = "block";
    pauseDisplay.style.display = "none";
}

function trocarMusica(musica, capa, nome, autor) {
    audioAtual.src = musica;
    capaAtual.style.backgroundImage = capa;
    capaAtual.style.backgroundColor = null;
    tituloAtual.innerHTML = nome;
    audioAtual.innerHTML = autor;
    tocarMusica();
}
