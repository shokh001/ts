"use strict";
//TS => functions, signature functions, function overloads
// function decloaration
function pow(x, y) {
    return `${x} ** ${y} = ${x ** y}`;
}
// arrow function
const add = (x, y) => x + y;
function voidFunction(x) {
    console.log(x);
}
// hech qachon tugamaydigan siklli joylarada ishlatiladi
// tugallanmaydigan function
function neverFunction(s) {
    throw new Error(s);
}
///signature functions
let c;
c = function (a, b) {
    return `${b}: ${a}`;
};
function overloadsFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadsFunc(1, 3));
//# sourceMappingURL=index.js.map