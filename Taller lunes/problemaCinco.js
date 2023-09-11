/*function calcularSalarioMensual(salarioBase, comisionPorLicencia, licenciasVendidas) {
    const deduccionesImpuestos = 0.05;

    const salarioTotalAntesDeImpuestos = salarioBase + (comisionPorLicencia * licenciasVendidas);

    const impuestos = salarioTotalAntesDeImpuestos * deduccionesImpuestos;

    const salarioMensualDespuesDeImpuestos = salarioTotalAntesDeImpuestos - impuestos;

    return salarioMensualDespuesDeImpuestos;
}*/

const calcularSalarioMensual = (salarioBase, comisionPorLicencia, licenciasVendidas) =>
  salarioBase + comisionPorLicencia * licenciasVendidas * (1 - 0.05);

const salarioBase = 3500000;
const comisionPorLicencia = 1500000;
const licenciasVendidas = 5;

const salarioMensual = calcularSalarioMensual(salarioBase, comisionPorLicencia, licenciasVendidas);

console.log(`El salario mensual del vendedor es: ${salarioMensual} pesos`);
