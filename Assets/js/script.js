document.getElementById('entrar').addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const nomeCorreto = "Alana Valeska";
    const senhaCorreta = "13102024";

    if (nome === nomeCorreto && senha === senhaCorreta) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
    } else {
        document.getElementById('erro').style.display = 'block';
    }
});

const figures = document.querySelectorAll('.imagens figure');
let currentIndex = 0;

function updateGallery() {
    figures.forEach((figure, index) => {
        figure.style.display = index === currentIndex ? 'block' : 'none';
    });
}

updateGallery();

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % figures.length;
    updateGallery();
});


document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + figures.length) % figures.length;
    updateGallery();
});

document.querySelectorAll('img.zoom').forEach(function (img) {
    img.addEventListener('click', function () {
        img.classList.toggle('zoomed');
    });
});
let contadorDeCliques = 0;

function contarCliques() {
    contadorDeCliques++;


    if (contadorDeCliques === 10) {
        document.getElementById("conteudo-secreto").style.display = "block";
        document.getElementById("secreto").style.display = "none";
        alert("Você clicou 10 vezes! O segredo foi revelado!");


        contadorDeCliques = 0;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("musica");

    audio.volume = 0.1;

    audio.play().catch(() => {
        let botao = document.createElement("button");
        botao.innerText = "🎵 Tocar Música";
        botao.style.position = "fixed";
        botao.style.bottom = "20px";
        botao.style.left = "20px";
        botao.style.padding = "10px";
        botao.style.background = "rgba(0, 0, 0, 0.7)";
        botao.style.color = "white";
        botao.style.border = "none";
        botao.style.cursor = "pointer";
        document.body.appendChild(botao);

        botao.addEventListener("click", function () {
            audio.play();
            botao.remove();
        });
    });
});


