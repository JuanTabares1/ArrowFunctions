/*function calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima) {
    return (temperaturaMaxima + temperaturaMinima) / 2;
}*/

const calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima) => {
    return (temperaturaMaxima + temperaturaMinima) / 2;
};

const temperaturaMaximaDia1 = 30; 
const temperaturaMinimaDia1 = 20;

const temperaturaMediaDia1 = calcularTemperaturaMedia(temperaturaMaximaDia1, temperaturaMinimaDia1);

console.log(`La temperatura media del día 1 es: ${temperaturaMediaDia1} grados Celsius`);