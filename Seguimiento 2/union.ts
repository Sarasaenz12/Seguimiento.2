// Unión de tipos de objetos
type MyUnion = {
    name: string;
    age: number;
} | {
    email: string;
    phone: string;
};

let data: MyUnion = { name: "Ana", age: 30 };
data = { email: "ana@example.com", phone: "987-654-3210" };