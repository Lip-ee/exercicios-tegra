function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let nums = [num1, num2];
    let ordNums = nums.sort((a, b) => b - a);
    let resposta = ordNums[0] % ordNums[1] == 0 ? "São múltiplos" : "Não são múltiplos";

    // output
    document.getElementById("output").innerHTML = `
    Digite dois números inteiros: <br><br>
    <span><b>${num1}</b></span> <br><br>
    <span><b>${num2}</b></span> <br><br>
    <b>${resposta}</b>
    `;
}
