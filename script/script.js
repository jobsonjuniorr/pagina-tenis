
let corSelecionada = null;
let tamanhoSelecionado = null;

document.querySelectorAll('.corall').forEach(item => {
    item.addEventListener('click', function () {
        let imgPath = this.src;
        corSelecionada = this.getAttribute('data-value');
        changeContent(imgPath);
    });
});

function changeContent(imgPath) {
    document.querySelector('.one').src = imgPath;

    if (corSelecionada == 'verde') {
        document.body.style.backgroundImage = 'linear-gradient(#0f630f,#9bfa83)';
        document.querySelector(".recebevalor").textContent = 'Tênis Nike Dunk Low "Grey Fog" Verde';
    }
    if (corSelecionada == 'cinza') {
        document.querySelector(".recebevalor").textContent = 'Tênis Nike Dunk Low "Grey Fog" Cinza';
        document.body.style.backgroundImage = 'linear-gradient(#c9d5e0,#787881)';
    }
    if (corSelecionada == 'preto') {
        document.querySelector(".recebevalor").textContent = 'Tênis Nike Dunk Low "Grey Fog" Preto';
        document.body.style.backgroundImage = 'linear-gradient( #2b2b2c,#424242 )';
    }
    if (corSelecionada == 'azul') {
        document.querySelector(".recebevalor").textContent = 'Tênis Nike Dunk Low "Grey Fog" Azul';
        document.body.style.backgroundImage = 'linear-gradient( #65a6e4,#5c5cf7 )';
    }

}

// Função para selecionar o tamanho e confirmar a seleção
function botaotamanho() {
    document.addEventListener('DOMContentLoaded', function () {
        const botoes = document.querySelectorAll(".botoes-1");
        const botaoConfirmar = document.getElementById('confirmar');

        if (botoes.length > 0) {
            botoes.forEach(function (botao) {
                botao.addEventListener('click', function () {
                   
                    botoes.forEach(function (btn) {
                        btn.classList.remove('ativo');
                    });
                    botao.classList.add('ativo');
                    tamanhoSelecionado = botao.getAttribute('data-value')
                });
            });
        } else {
            console.error("Elementos não encontrados");
        }
        botaoConfirmar.addEventListener('click', function () {
            confirmarSelecao();

        });
    });
}

// Função para confirmar a seleção e logar os valores
function confirmarSelecao() {
    if (tamanhoSelecionado) {
        if(!corSelecionada){
        corSelecionada = 'cinza';
        }
        console.log("Cor selecionada:", corSelecionada, "Tamanho selecionado:", tamanhoSelecionado);
        const url =  `teste.html?tamanho=${encodeURIComponent(tamanhoSelecionado)}&cor=${encodeURIComponent(corSelecionada)}`;
        window.location.href = url;
    }
    else{
        alert("Por favor, selecione uma cor e um tamanho antes de confirmar.");
        console.log(corSelecionada,tamanhoSelecionado)
    }
}

botaotamanho();

