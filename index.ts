//TS => generic type

type A<T> = T;

type B = A<string> // B -> string
type C = A<number> // C -> number
type D = A<boolean> // D -> boolean
type E = A<'TS'>;  // E -> "TS"

let arr: number[] = [1, 2, 3];
let arr2: Array<string> = ['a', 'b', 'c'];

type MyArr<T> = T[];

const arr3: MyArr<boolean | number> = [true, false, 12];

// function echo<T>(x: T): T {
//     return x;
// }

// const res = echo(12)
// const res = echo('Salom')
// const res: string = echo('Salom')

const echo = <T>(x: T): T => {
    return x;
}

// const res: string = echo('TS'); <=> const res = echo<string>('TS');

const echo2: <T>(x: T) => T = <T>(x: T): T => {
    return x;
}

type ECHO = <T>(x: T) => T

const echo3: ECHO = <T>(x: T): T => x;

const res: string = echo3('TS');