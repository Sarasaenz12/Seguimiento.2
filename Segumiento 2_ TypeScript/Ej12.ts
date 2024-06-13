function Greety(greeting:string, ...names: string[]){
    return greeting+ " " + names.join(", ") + "!";
}

Greety("Hola", "Royerg", "Orozco");