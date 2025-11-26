function demoPreIncremento() {
    let x = parseInt(document.getElementById("valorInicial").value);

    let salida = "<h2>++x (pre-incremento)</h2>";
    salida += "<p>Antes: " + x + "</p>";
    salida += "<p>Salida (incrementa y luego muestra): " + (++x) + "</p>";
    salida += "<p>Después: " + x + "</p>";

    document.getElementById("valorInicial").value = x;
    document.getElementById("resultados").innerHTML = salida;

}

