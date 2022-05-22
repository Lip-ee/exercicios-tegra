function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let a = parseFloat(document.getElementById("medidaA").value);
    let b = parseFloat(document.getElementById("medidaB").value);
    let c = parseFloat(document.getElementById("medidaC").value);
    
    let areaQuad = (a * a).toFixed(4);
    let areaTriang = ((a * b) / 2).toFixed(4);
    let areaTrapez = (((a + b) * c) / 2).toFixed(4);

    // output
    document.getElementById("output").innerHTML = `
    Digite a medida A: <span><b>${a}</b></span> <br><br>
    Digite a medida B: <span><b>${b}</b></span> <br><br>
    Digite a medida C: <span><b>${c}</b></span> <br><br>
    ÁREA DO QUADRADO = <b>${areaQuad}</b> <br><br>
    ÁREA DO TRIÂNGULO = <b>${areaTriang}</b> <br><br>
    ÁREA DO TRAPÉZIO = <b>${areaTrapez}</b> <br><br>
    `;
}
