function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let inputSeg = parseInt(document.getElementById("inputSeg").value);

    let h = Math.floor(inputSeg / 3600);
    let m = Math.floor(inputSeg % 3600 / 60);
    let s = Math.floor(inputSeg % 3600 % 60);

    // output
    document.getElementById("output").innerHTML = `
    Digite a duração em segundos: <span><b>${inputSeg}</b></span> <br><br>
    ${h}:${m}:${s}
    `;
}
