function demoAcumulativoDivision() {
    let x = parseInt(document.getElementById("valorInicial").value);
    let n = parseInt(document.getElementById("cantidad").value);

    let salida = "<h2>x /= " + n + "</h2>";
    salida += "<p>Antes: " + x + "</p>";

    if (n === 0) {
        salida += "<p style='color:red'>Error: no se puede dividir por cero</p>";
    } else {
        x /= n;
        salida += "<p>Después: " + x + "</p>";
        document.getElementById("valorInicial").value = x;
    }

    document.getElementById("resultados").innerHTML = salida;
}

