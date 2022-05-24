function calcular(){

    // atribuindo variáveis e resolvendo a lógica
    let dist1 = parseFloat(document.getElementById("dist1").value).toFixed(2);
    let dist2 = parseFloat(document.getElementById("dist2").value).toFixed(2);
    let dist3 = parseFloat(document.getElementById("dist3").value).toFixed(2);
    
    const dists = [dist1, dist2, dist3];
    let maiorDist = (Math.max.apply(Math, dists)).toFixed(2);

    // output
    document.getElementById("output").innerHTML = `
    Digite as três distâncias: <br><br>
    <span><b>${dist1}</b></span> <br><br>
    <span><b>${dist2}</b></span> <br><br>
    <span><b>${dist3}</b></span> <br><br>
    MAIOR DISTÂNCIA = <b>${maiorDist}</b>
    `;
}
