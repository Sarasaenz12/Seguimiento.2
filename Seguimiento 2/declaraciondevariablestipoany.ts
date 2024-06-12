// Declaración de variables de tipo any
let value: any = 'OpenAI';
value = 123;
value = false;
// Uso de variables de tipo any
const upperCaseResult = value.toUpperCase();                                                                
console.log(upperCaseResult); // Output: 'OPENAI'
// Llamada a una función con un parámetro de tipo any
function greet(name: any): void {                                                                   
    console.log(`Hello, ${name}!`);
}

greet(42); // Válido, ya que name puede ser de cualquier tipo
greet('Alice'); // Válido, ya que name puede ser de cualquier tipo