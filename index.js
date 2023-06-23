"use strict";
//TS => generic type
let arr = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
const arr3 = [true, false, 12];
// function echo<T>(x: T): T {
//     return x;
// }
// const res = echo(12)
// const res = echo('Salom')
// const res: string = echo('Salom')
const echo = (x) => {
    return x;
};
// const res: string = echo('TS'); <=> const res = echo<string>('TS');
const echo2 = (x) => {
    return x;
};
const echo3 = (x) => x;
const res = echo3('TS');
//# sourceMappingURL=index.js.map