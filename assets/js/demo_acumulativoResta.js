function demoAcumulativoResta() {
    let x = parseInt(document.getElementById("valorInicial").value);
    let n = parseInt(document.getElementById("cantidad").value);

    let salida = "<h2>x -= " + n + "</h2>";
    salida += "<p>Antes: " + x + "</p>";
    x -= n;
    salida += "<p>Después: " + x + "</p>";

    document.getElementById("valorInicial").value = x;
    document.getElementById("resultados").innerHTML = salida;

}

