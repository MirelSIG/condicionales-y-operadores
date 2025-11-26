function demoPostDecremento() {
    let x = parseInt(document.getElementById("valorInicial").value);
    let resultado = x--;

    let salida = "<h2>x-- (post-decremento)</h2>";
    salida += "<p>Antes: " + (resultado) + "</p>";
    salida += "<p>Salida (valor devuelto): " + resultado + "</p>";
    salida += "<p>Después (valor actual de x): " + x + "</p>";

    document.getElementById("valorInicial").value = x;
    document.getElementById("resultados").innerHTML = salida;

}

