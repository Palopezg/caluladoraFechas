function calculateDifference() {
    // Obtener las fechas del formulario
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Calcular la diferencia en milisegundos
    var difference = endDate - startDate;

    // Convertir de milisegundos a días
    var days = difference / (1000 * 3600 * 24);

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `La diferencia es de ${days} días.`;
}

