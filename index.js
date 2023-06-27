"use strict";
// TypeScript Nullish assigment vs chaining operator
// Nullish assigment -> null yoki undefinedga tneg bulsa boshqa narsani oladi
let a = null;
a = undefined;
a = 20;
let b = a ?? 0;
// || va ?? farqi yoki operatori false bulgan barchasini qabul qiladi ?? esa faqat null va undefinedni
// console.log(b);
// chaining
// const obj = {
//     user: {
//         name: '',
//         country: {
//             region: "",
//         }
//     }
// }
// const obj2 = {
//     user: {
//         name: '',
//         country: null
//     }
// }
// console.log(obj.user.country?.region);
function sum(x, y, cb) {
    let natija = x + y;
    // if (cb) {
    //     cb(natija);
    // }
    cb?.(natija);
    return natija;
}
function calcPrice(arr) {
    let s = 0;
    arr.forEach(element => {
        s += element?.price ?? 0;
    });
    return s;
}
const result = calcPrice([
    { price: 1 },
    null,
    { price: 4 },
    undefined
]);
console.log(result);
//# sourceMappingURL=index.js.map