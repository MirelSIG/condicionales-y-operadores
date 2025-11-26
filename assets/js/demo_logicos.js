function demoLogicos() {
  // Leer valores de los checkboxes
    let tieneClave = document.getElementById("tieneClave").checked;
    let esAdmin = document.getElementById("esAdmin").checked;

    let salida = "<h2>Resultados de Operadores Lógicos</h2>";
    salida += "<p>tieneClave = " + tieneClave + ", esAdmin = " + esAdmin + "</p>";

    // AND (&&)
    salida += "<p>tieneClave && esAdmin → " + (tieneClave && esAdmin) + "</p>";

    // OR (||)
    salida += "<p>tieneClave || esAdmin → " + (tieneClave || esAdmin) + "</p>";

    // NOT (!)
    salida += "<p>!tieneClave → " + (!tieneClave) + "</p>";


    document.getElementById("resultados").innerHTML = salida;
}
