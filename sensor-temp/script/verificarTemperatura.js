function verificarTemperatura() {
    const temp = parseFloat(document.getElementById("temperatura").value);
    const personagem = document.getElementById("personagem");
    const body = document.body;

    if (!isNaN(temp) && temp > 30) {
    body.classList.remove("frio");
    body.classList.add("quente");
    personagem.src = "imgs/quente.png";
    personagem.alt = "Personagem de verão";
    } else {
    body.classList.remove("quente");
    body.classList.add("frio");
    personagem.src = "imgs/frio.png";
    personagem.alt = "Personagem de inverno";
    }
}