function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let variavel = document.getElementById("varID").value;
    
    // output
    document.getElementById("output").innerHTML = `
    input_text = <span><b>${variavel}</b></span> <br><br>
    `;
}
