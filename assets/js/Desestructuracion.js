// Ejemplo interactivo de desestructuración de objetos
function mostrarDesestructuracionExample() {
    // Definición de un objeto en JavaScript
    const usuario = {
        nombre: "Ana",
        edad: 30,
        ciudad: "Madrid",
        contacto: {
            email: "ana@example.com",
            telefono: "+34 600 000 000"
        }
    };

    // --- Desestructuración en JavaScript ---
    // Extraemos las propiedades 'nombre' y 'edad' en variables separadas
    const { nombre, edad } = usuario;

    // Desestructuración anidada: extraer email desde contacto
    const { contacto: { email } } = usuario;

    // También puedes renombrar variables durante la desestructuración
    const { nombre: nombreDeUsuario, edad: añosDeUsuario } = usuario;

    // Construir salida HTML
    const salida = [];
    salida.push('<div><strong>Objeto completo:</strong> <pre>' + JSON.stringify(usuario, null, 2) + '</pre></div>');
    salida.push('<p><strong>Desestructuración simple:</strong> nombre = <code>' + nombre + '</code>, edad = <code>' + edad + '</code></p>');
    salida.push('<p><strong>Desestructuración anidada:</strong> email = <code>' + email + '</code></p>');
    salida.push('<p><strong>Renombrado:</strong> nombreDeUsuario = <code>' + nombreDeUsuario + '</code>, añosDeUsuario = <code>' + añosDeUsuario + '</code></p>');

    const cont = document.getElementById('destructResult');
    if (cont) {
        cont.innerHTML = salida.join('\n');
        cont.style.display = 'block';
    } else {
        // Fallback: log to console
        console.log('Objeto completo:', usuario);
        console.log('Nombre extraído (desestructurado):', nombre);
        console.log('Edad extraída (desestructurado):', edad);
        console.log('Email (desestructuración anidada):', email);
    }
}

// Exponer globalmente
window.mostrarDesestructuracionExample = mostrarDesestructuracionExample;
