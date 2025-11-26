function demoLogicos() {
  // Leer valores de los checkboxes
  let tieneClave = document.getElementById("tieneClave").checked;
  let esAdmin = document.getElementById("esAdmin").checked;

  let salida = "<h2>Resultados de Operadores Lógicos</h2>";
  salida += `<p>tieneClave = ${tieneClave}, esAdmin = ${esAdmin}</p>`;

  // Ejemplo de AND (&&)
  if (tieneClave && esAdmin) {
    salida += "<p>Acceso total concedido: usuario administrador con clave.</p>";
  } else if (tieneClave && !esAdmin) {
    salida += "<p>Acceso limitado: usuario con clave pero sin privilegios de administrador.</p>";
  } else if (!tieneClave && esAdmin) {
    salida += "<p>Acceso denegado: administrador sin clave.</p>";
  } else {
    salida += "<p>Acceso denegado: no tiene clave ni privilegios.</p>";
  }

  // Ejemplo de OR (||)
  if (tieneClave || esAdmin) {
    salida += "<p>Condición OR: cumple al menos uno de los requisitos.</p>";
  } else {
    salida += "<p>Condición OR: no cumple ninguno de los requisitos.</p>";
  }

  // Ejemplo de NOT (!) en ciclo
  let intentos = 0;
  while (!tieneClave && intentos < 3) {
    salida += `<p>Intento ${intentos + 1}: falta la clave, acceso bloqueado.</p>`;
    intentos++;
  }

  // Ejemplo combinado con for y lógica
  for (let i = 1; i <= 2; i++) {
    if (esAdmin && tieneClave) {
      salida += `<p>Verificación ${i}: usuario válido.</p>`;
    } else {
      salida += `<p>Verificación ${i}: usuario inválido.</p>`;
    }
  }

  document.getElementById("resultados").innerHTML = salida;
}
