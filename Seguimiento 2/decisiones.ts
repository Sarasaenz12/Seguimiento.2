function addition(x: number, y: number) {
    if (x <= 10 || y <= 10) {
        throw new Error("Los números deben ser mayores a 10");
    }
    return x + y;
}

const value1 = 15;
const value2 = 20;

try {
    const result = addition(value1, value2);
    console.log(result);
} catch (error) {
    console.error(error.message);
}