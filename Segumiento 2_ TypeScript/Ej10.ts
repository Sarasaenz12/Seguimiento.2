function añade(a:string, b:string):string;
function añade(a:number, b:number): number;

function añade(a: any, b:any): any{
    return a + b;

}

console.log(añade("Hola ", "Mundo"));