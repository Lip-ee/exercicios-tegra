function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = parseFloat(document.getElementById("val2").value);
    let val3 = parseFloat(document.getElementById("val3").value);

    const nums = [val1, val2, val3];
    let menor = Math.min.apply(Math, nums);

    // output
    document.getElementById("output").innerHTML = `
    Primeiro valor: <span><b>${val1}</b></span> <br><br>
    Segundo valor: <span><b>${val2}</b></span> <br><br>
    Terceiro valor: <span><b>${val3}</b></span> <br><br>
    MENOR = ${menor}
    `;
}
