function calcularDiferenciaFechas() {
    const fecha1 = document.getElementById("fecha1").value;
    const fecha2 = document.getElementById("fecha2").value;

    // Convertir las fechas a objetos Date
    const fecha1Obj = new Date(fecha1);
    const fecha2Obj = new Date(fecha2);

    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = fecha2Obj - fecha1Obj;

    // Convertir la diferencia a días
    const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `La diferencia entre las dos fechas es de ${diferenciaDias} días.`;

    return false;
}

