function demoPreDecremento() {
    let x = parseInt(document.getElementById("valorInicial").value);

    let salida = "<h2>--x (pre-decremento)</h2>";
    salida += "<p>Antes: " + x + "</p>";
    salida += "<p>Salida (se decrementa y luego se muestra): " + (--x) + "</p>";
    salida += "<p>Después: " + x + "</p>";

    document.getElementById("valorInicial").value = x;
    document.getElementById("resultados").innerHTML = salida;

}
