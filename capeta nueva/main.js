
// CONDICIONALES EN JAVASCRIPT - INTERACTIVO
// 1. IF/ELSE BÁSICO
function ejecutarIfElseBasico() {
    const edad = parseInt(document.getElementById('edad').value);
    const resultBox = document.getElementById('resultIfElseBasico');
    const resultText = document.getElementById('resultIfElseBasicoText');

    // Validar entrada

    if (isNaN(edad)) {
        resultBox.className = 'result-box error';
        resultText.textContent = '❌ Por favor ingresa un número válido';
        return;
    }

    // Ejecutar condicional if/else
    let resultado;
    if (edad >= 18) {
        resultado = '✅ Eres mayor de edad';
        resultBox.className = 'result-box success';
    } else {
        resultado = '⚠️ Eres menor de edad';
        resultBox.className = 'result-box warning';
    }

    resultText.textContent = resultado;
    console.log(`If/Else Básico - Edad: ${edad} - ${resultado}`);
}

// 2. IF/ELSE ANIDADO

function ejecutarIfElseAnidado() {
    const calificacion = parseInt(document.getElementById('calificacion').value);
    const resultBox = document.getElementById('resultIfElseAnidado');
    const resultText = document.getElementById('resultIfElseAnidadoText');

    // Validar entrada
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        resultBox.className = 'result-box error';
        resultText.textContent = '❌ Por favor ingresa un número entre 0 y 100';
        return;
    }

    // Ejecutar condicional if/else anidado
    let resultado;
    if (calificacion >= 90) {
        resultado = '🌟 Excelente (90-100)';
        resultBox.className = 'result-box success';
    } else if (calificacion >= 80) {
        resultado = '✅ Muy Bien (80-89)';
        resultBox.className = 'result-box success';
    } else if (calificacion >= 70) {
        resultado = '👍 Bien (70-79)';
        resultBox.className = 'result-box warning';
    } else if (calificacion >= 60) {
        resultado = '⚠️ Aceptable (60-69)';
        resultBox.className = 'result-box warning';
    } else {
        resultado = '❌ Insuficiente (0-59)';
        resultBox.className = 'result-box error';
    }

    resultText.textContent = resultado;
    console.log(`If/Else Anidado - Calificación: ${calificacion} - ${resultado}`);
}

// 3. SWITCH/CASE


function ejecutarSwitch() {
    const dia = parseInt(document.getElementById('numeroDia').value);
    const resultBox = document.getElementById('resultSwitch');
    const resultText = document.getElementById('resultSwitchText');

    // Ejecutar switch/case
    let resultado;
    switch (dia) {
        case 1:
            resultado = '📅 Lunes - Inicio de semana';
            break;
        case 2:
            resultado = '📅 Martes - Día de trabajo';
            break;
        case 3:
            resultado = '📅 Miércoles - Mitad de semana';
            break;
        case 4:
            resultado = '📅 Jueves - Casi viernes';
            break;
        case 5:
            resultado = '🎉 Viernes - ¡Casi fin de semana!';
            resultBox.className = 'result-box success';
            break;
        case 6:
            resultado = '🌞 Sábado - ¡Fin de semana!';
            resultBox.className = 'result-box success';
            break;
        case 7:
            resultado = '😴 Domingo - Descanso';
            resultBox.className = 'result-box success';
            break;
        default:
            resultado = '❌ Día inválido (debe ser 1-7)';
            resultBox.className = 'result-box error';
    }

    // Resetear clase si no es fin de semana
    if (dia >= 1 && dia <= 4) {
        resultBox.className = 'result-box warning';
    }

    resultText.textContent = resultado;
    console.log(`Switch/Case - Día: ${dia} - ${resultado}`);
}

// 4. TERNARIO BÁSICO
function ejecutarTernarioBasico() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultBox = document.getElementById('resultTernarioBasico');
    const resultText = document.getElementById('resultTernarioBasicoText');

    // Validar entrada
    if (isNaN(numero)) {
        resultBox.className = 'result-box error';
        resultText.textContent = '❌ Por favor ingresa un número válido';
        return;
    }

    // Ejecutar operador ternario básico
    const resultado = numero % 2 === 0 ? '✅ Es un número PAR' : '❌ Es un número IMPAR';
    const className = numero % 2 === 0 ? 'result-box success' : 'result-box warning';

    resultBox.className = className;
    resultText.textContent = resultado;
    console.log(`Ternario Básico - Número: ${numero} - ${resultado}`);
}

// 5. TERNARIO ANIDADO
function ejecutarTernarioAnidado() {
    const puntos = parseInt(document.getElementById('puntos').value);
    const resultBox = document.getElementById('resultTernarioAnidado');
    const resultText = document.getElementById('resultTernarioAnidadoText');

    // Validar entrada
    if (isNaN(puntos) || puntos < 0 || puntos > 100) {
        resultBox.className = 'result-box error';
        resultText.textContent = '❌ Por favor ingresa un número entre 0 y 100';
        return;
    }

    // Ejecutar operador ternario anidado
    const premio = puntos >= 90 ? '🥇 Oro (90-100)' :
                   puntos >= 75 ? '🥈 Plata (75-89)' :
                   puntos >= 50 ? '🥉 Bronce (50-74)' :
                   '❌ Sin premio (0-49)';

    let className = 'result-box success';
    if (puntos < 50) {
        className = 'result-box error';
    } else if (puntos < 75) {
        className = 'result-box warning';
    }

    resultBox.className = className;
    resultText.textContent = premio;
    console.log(`Ternario Anidado - Puntos: ${puntos} - ${premio}`);
}

// 6. COMBINADO: TODOS LOS CONDICIONALES
function ejecutarCombinado() {
    const edad = parseInt(document.getElementById('edadCombinada').value);
    const resultBox = document.getElementById('resultCombinado');
    const resultText = document.getElementById('resultCombinnadoText');


    // Validar entrada
    if (isNaN(edad)) {
        resultBox.className = 'result-box error';
        resultText.textContent = '❌ Por favor ingresa un número válido';
        return;
    }

    // Usar ternario para categoría
    const categoria = edad >= 18 ? 'Adulto' : 'Menor';

    // Usar if/else anidado para etapa de vida
    let etapa;
    if (edad >= 65) {
        etapa = 'Jubilado';
    } else if (edad >= 18) {
        etapa = 'Trabajador';
    } else if (edad >= 13) {
        etapa = 'Adolescente';
    } else {
        etapa = 'Niño';
    }

    // Usar switch para grupo de edad
    let grupo;
    const decada = Math.floor(edad / 10);
    switch (decada) {
        case 0:
        case 1:
            grupo = '0-19 años';
            break;
        case 2:
        case 3:
            grupo = '20-39 años';
            break;
        case 4:
        case 5:
            grupo = '40-59 años';
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            grupo = '60+ años';
            break;
        default:
            grupo = 'Edad desconocida';
    }

    // Determinar color basado en edad
    let className = 'result-box success';
    if (edad < 18) {
        className = 'result-box warning';
    }

    const resultado = `👤 Edad: ${edad} años | 📊 Categoría: ${categoria} | 🎯 Etapa: ${etapa} | 👥 Grupo: ${grupo}`;
    resultBox.className = className;
    resultText.textContent = resultado;
    console.log(`Combinado - ${resultado}`);
}

// Permitir ejecutar con Enter en los inputs
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach((input) => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Ejecutar la función correspondiente según el input
                if (this.id === 'edad') ejecutarIfElseBasico();
                else if (this.id === 'calificacion') ejecutarIfElseAnidado();
                else if (this.id === 'numero') ejecutarTernarioBasico();
                else if (this.id === 'puntos') ejecutarTernarioAnidado();
                else if (this.id === 'edadCombinada') ejecutarCombinado();
            }
        });
    });

    // Mensaje en consola
    console.log('🚀 Condicionales en JavaScript - Interactivo cargado');
    console.log('Prueba ingresando valores en los campos y presionando los botones');
});
