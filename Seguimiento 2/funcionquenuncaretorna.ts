
// Función que nunca retorna
function errorenlaNotificacion(message: string): never {
    throw new Error(message);
}
// Función que nunca termina
function endlessLoop(): never {
    while (true) {
        // Código que nunca termina
    }
}
// Uso del tipo never
const unreachable: never = errorenlaNotificacion('ah ocurrido un error');
console.log(unreachable); // El código nunca llegará aquí, ya que la función notifyError lanza una excepción