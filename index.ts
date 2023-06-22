//TS => functions, signature functions, function overloads

// function decloaration
function pow(x: number, y: number): string {
    return `${x} ** ${y} = ${x ** y}`;
}

// arrow function
const add = (x: number, y: number): number => x + y;

function voidFunction(x: number): void {
    console.log(x);
}

// hech qachon tugamaydigan siklli joylarada ishlatiladi
// tugallanmaydigan function
function neverFunction(s: string): never {
    throw new Error(s)
}



///signature functions

let c: (x: number, y: string) => string

c = function (a: number, b: string): string {
    return `${b}: ${a}`
}

// console.log(c(3, 'k'));


/// function overloads --> funksiyalarga qo'shimcha tiplar berish imkoniyatini yaratadi

function overloadsFunc(x: number, y: number): number;
function overloadsFunc(x: string, y: number): string;

function overloadsFunc(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        return `${x} ${y}`
    }
}

console.log(overloadsFunc(1, 3));
