function showsemana(dia: string) {
    switch (dia) {
        case "Lunes":
            console.log("Es Lunes");
            break;
        case "Martes":
            console.log("Es Martes");
            break;
        case "Miercoles":
            console.log("Es Miercoles");
            break;
        case "Jueves":
            console.log("Es Jueves");
            break;
        case "Viernes":
            console.log("Es Viernes");
            break;
        case "Sabado":
            console.log("Es Sabado");
            break;
        case "sunday¿¿":
            console.log("Es Domingo");
            break;
        default:
            throw new Error("Dia invalido");
    }
}

showsemana("Lunes"); // Imprime Es lunes