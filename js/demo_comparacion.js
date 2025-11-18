function demoComparacion() {
    let entrada = document.getElementById("valorComparacion").value;

    let salida = "<h2>Comparación == vs ===</h2>";
    salida += "<p>Entrada: '" + entrada + "' (" + typeof entrada + ")</p>";
    salida += "<p>Entrada == 18 → " + (entrada == 18) + "</p>";
    salida += "<p>Entrada === 18 → " + (entrada === 18) + "</p>";
    salida += "<p><strong>==</strong> compara solo el valor (puede convertir tipos), <strong>===</strong> compara valor y tipo (sin conversión).</p>";

    document.getElementById("resultados").innerHTML = salida;
}

