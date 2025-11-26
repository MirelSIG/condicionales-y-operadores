function demoPostIncremento() {
    let x = parseInt(document.getElementById("valorInicial").value);

    let salida = "<h2>x++ (post-incremento)</h2>";
    salida += "<p>Antes: " + x + "</p>";
    salida += "<p>Salida (se muestra y luego incrementa): " + (x++) + "</p>";
    salida += "<p>Después: " + x + "</p>";

    document.getElementById("valorInicial").value = x;
    document.getElementById("resultados").innerHTML = salida;

}

