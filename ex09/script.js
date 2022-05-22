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

// function resolverEx9() {
//     let duracao = parseInt(document.getElementById('inputDuracao').value);
    
//     let horas = Math.floor(duracao / 3600);
//     let minutos = Math.floor(duracao % 3600 / 60);
//     let segundos = Math.floor(duracao % 3600 % 60);
    
//     let textArea = document.getElementById('outputArea');
//     textArea.textContent += `Digite a duração em segundos: ${duracao}\n${horas}:${minutos}:${segundos}\n\n`
// }