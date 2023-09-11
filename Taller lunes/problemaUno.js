const coordenadaX1=2,coordenadaX2=4,coordenadaY1=-2,coordenadaY2=-4

/*function calcularDistancia(){
    return Math.round(Math.sqrt(Math.pow(coordenadaX2-coordenadaX1,2)+Math.pow(coordenadaY2-coordenadaY1,2)))
}*/

const calcularDistancia = () => Math.round(Math.sqrt(Math.pow(coordenadaX2 - coordenadaX1, 2) + Math.pow(coordenadaY2 - coordenadaY1, 2)));

console.log(`El planeta UA esta a ${calcularDistancia()} años luz`)