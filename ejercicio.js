const fechaActual = new Date();

const diaActual = fechaActual.getDate();

const mesActual = fechaActual.getMonth() + 1; // Sumar 1 para obtener el mes en formato 1-12

const anioActual = fechaActual.getFullYear();

console.log(`La fecha actual es: ${diaActual}/${mesActual}/${anioActual}`);