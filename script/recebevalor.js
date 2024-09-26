function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const tamanho = params.get('tamanho');
    const cor = params.get('cor');
    return { tamanho, cor };
}

document.addEventListener("DOMContentLoaded", function() {
    const { tamanho, cor } = getQueryParams();
    console.log("Parâmetros recebidos:", window.location.search);
    console.log("Tamanho recebido:", tamanho);
    console.log("Cor recebida:", cor);
    if (tamanho && cor) {
        console.log("Tamanho:", tamanho, "Cor:", cor);
        document.getElementById("detalhesCompra").textContent = `Tamanho: ${tamanho}, Cor: ${cor}`;
    } else {
        console.error("Tamanho ou cor não especificados.");
    }
});