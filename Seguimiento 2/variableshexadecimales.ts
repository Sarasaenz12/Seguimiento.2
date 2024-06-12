// Declaración de variables hexadecimales
let numeroColor: number = 0xABCDEF;
let combinarColor: number = 0x1234;
// Operaciones con hexadecimales
const mezclacolor: number = numeroColor & combinarColor; // Resultado: 0xABCDEF & 0x1234 = 0x2034
console.log(mezclacolor);