"use strict";
//TS => Arrays, Tuples & Enums
let a = []; // --> this is any type
a = [12, 'sdf', true, undefined, {}];
// let b = [1, 2, 3, 4];
// b = ['str']; error
// array elon qilish
let b; // 1-way
b = [11, 12];
let c = [1]; // 2-way
let unionArr = [1212, 'str'];
let unionArr2 = [false, 42342];
// tuples --> element typelariga shablon -> kortejlar
let tup;
tup = [12, 'sfds'];
// tup = ['ssf', 242]  error
// tup = [2423, 'qe', 'sdfsd']  error
let tup2;
tup2 = [2423, ['qe', 'sdfsd']];
// ENUMS --> qayta hisoblash
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
// console.log(gender[gender.male]); // log => male
// enum g {
//     a,
//     b = 10,
//     c
// }
// console.log(g.a, g.b, g.c); //log => 0, 10, 11 
// bu yuerda property string bulgani uchun value orqali keyni ola olamymz
// chunki bunaqa value dagi key bulsa ushani qiymatini olib kelib quyadi
var h;
(function (h) {
    h["a"] = "Hi";
    h["b"] = "TS";
})(h || (h = {}));
console.log(0 /* i.a */, 1 /* i.b */);
//# sourceMappingURL=index.js.map