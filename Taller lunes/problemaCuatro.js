const cantidadesDeEnergia = [100, -50, 75, -120, 200, -30];

/*function contarSablesNegativos(cantidades) {
let cantidadNegativa = 0;
for (let i = 0; i < cantidades.length; i++) {
    if (cantidades[i] < 0) {
        cantidadNegativa++;
    }
}
return cantidadNegativa;
}*/

const contarSablesNegativos = (cantidades) => {
let cantidadNegativa = 0;
for (let i = 0; i < cantidades.length; i++) {
    if (cantidades[i] < 0) {
        cantidadNegativa++;
    }
}
    return cantidadNegativa;
};

const sablesNegativos = contarSablesNegativos(cantidadesDeEnergia);

console.log(`La cantidad de sables de luz con energía negativa es: ${sablesNegativos}`);
