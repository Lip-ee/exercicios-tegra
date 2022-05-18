function calcular(){
    // atribuindo variáveis
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let area, perimetro, diagonal;

    // convertendo em float com n casas decimais
    base = parseFloat(base);
    altura = parseFloat(altura);
    
    area = (base * altura).toFixed(4);
    perimetro = (2 * (base + altura)).toFixed(4);
    diagonal = (Math.sqrt((base ** 2) + (altura ** 2))).toFixed(4);

    console.log(perimetro);

    document.getElementById("areaRet").innerHTML = `ÁREA = ${area}`;
    document.getElementById("perimetroRet").innerHTML = `PERÍMETRO = ${perimetro}`;
    document.getElementById("diagonalRet").innerHTML = `DIAGONAL = ${diagonal}`;
}
