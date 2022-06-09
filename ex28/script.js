function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);

    let nums = [num1, num2, num3, num4, num5];

    let maior = Math.max(...nums),
        menor = Math.min(...nums);
    
    // output
    document.getElementById("output").innerHTML = `
    Valores: <span><b>${nums.join(", ")}</b></span> <br><br>
    Saída: <b>${menor} e ${maior}</b>
    `;
}
