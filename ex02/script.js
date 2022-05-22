function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let base = document.getElementById("baseRetangulo").value;
    let altura = document.getElementById("alturaRetangulo").value;
    let area, perimetro, diagonal;

    area = (parseFloat(base) * parseFloat(altura)).toFixed(4);
    perimetro = (2 * (parseFloat(base) + parseFloat(altura))).toFixed(4);
    diagonal = (Math.sqrt( (parseFloat(base) ** 2) + (parseFloat(altura) ** 2) )).toFixed(4);

    // output
    document.getElementById("output").innerHTML = `
    Base do retângulo: <span><b>${base}</b></span> <br><br>
    Altura do retângulo: <span><b>${altura}</b></span> <br><br>
    ÁREA = <b>${area}</b> <br><br>
    PERÍMETRO = <b>${perimetro}</b> <br><br>
    DIAGONAL = <b>${diagonal}</b>
    `;
}
