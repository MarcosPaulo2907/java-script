// Função para mudar a cor e o texto com base na opção selecionada
function mudarCor() {
    var quadrado = document.getElementById("quadrado");
    var texto = quadrado;
    var corSelecionada = document.querySelector('input[name="cor"]:checked'); // Verifica qual radio está selecionado

    if (corSelecionada) {
        var cor = corSelecionada.value; // Pega o valor da cor selecionada
        switch (cor) {
            case "azul":
                quadrado.style.backgroundColor = "blue";
                texto.innerHTML = "Azul";
                break;
            case "vermelho":
                quadrado.style.backgroundColor = "red";
                texto.innerHTML = "Vermelho";
                break;
            case "verde":
                quadrado.style.backgroundColor = "green";
                texto.innerHTML = "Verde";
                break;
        }
    }
}

// Adiciona eventos de mudança nos inputs
document.querySelectorAll('input[name="cor"]').forEach(function(radio) {
    radio.addEventListener('change', mudarCor);
});

