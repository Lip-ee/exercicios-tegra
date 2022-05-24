let temp;

function escolheuC(){ // botão para calcular celcius
    temp = "C";
    document.getElementById("resposta").innerHTML = `
    <label for="temperatura">Digite a temperatura em Celcius: </label> <br><br>
    <input type="text" id="temperatura" name="temperatura"> <br><br>

    <button class="button-calc" onclick="calcularCtoF()"><b>Calcular</b></button>
    `;
    
};

function escolheuF(){ // botão para calcular fahrenheit
    temp = "F";
    document.getElementById("resposta").innerHTML = `
    <label for="temperatura">Digite a temperatura em Fahrenheit: </label> <br><br>
    <input type="text" id="temperatura" name="temperatura"> <br><br>

    <button class="button-calc" onclick="calcularFtoC()"><b>Calcular</b></button>
    `;
};

function calcularCtoF(){ // função de conversão celcius para fahrenheit

    // atribuindo variáveis e resolvendo a lógica
    let temperatura = parseFloat(document.getElementById("temperatura").value).toFixed(2);
    let conversao = ((temperatura * 1.8) + 32).toFixed(2);
    
    // output
    document.getElementById("output").innerHTML = `
    Você vai digitar a temperatura em qual escala (C/F)? <span><b>${temp}</b></span> <br><br>
    Digite a temperatura em Celcius: <span><b>${temperatura}</b></span> <br><br>
    Temperatura equivalente em Fahrenheit: <b>${conversao}</b>
    `;
}

function calcularFtoC(){ // função de conversão fahrenheit para celcius

    // atribuindo variáveis e resolvendo a lógica
    let temperatura = parseFloat(document.getElementById("temperatura").value).toFixed(2);
    let conversao = ((temperatura - 32) * (5/9)).toFixed(2);
    
    // output
    document.getElementById("output").innerHTML = `
    Você vai digitar a temperatura em qual escala (C/F)? <span><b>${temp}</b></span> <br><br>
    Digite a temperatura em Fahrenheit: <span><b>${temperatura}</b></span> <br><br>
    Temperatura equivalente em Celcius: <b>${conversao}</b>
    `;
}