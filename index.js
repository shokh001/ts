"use strict";
// TypeScript ! operator va foydalanuvchi malumotlari tekshirish
function calcWeight(products) {
    let s = 0;
    products.forEach(item => {
        s += item.weight; // objectni ichida aniq weight degan field borligini bilganimzda ishlatamiz ! ni
    });
    return s;
}
const res = calcWeight([
    { name: 'item 1', weight: 1 },
    { name: 'item 2', weight: 2 },
    { name: 'item 3', weight: 3 },
]);
console.log(res);
let a = null;
setTimeout(() => {
    a = 20;
}, 500);
setTimeout(() => {
    let b = a;
    console.log(b);
}, 1000);
// let c!: string;
// console.log(c)
class Front {
    constructor() {
        this.isRestApi = false;
    }
}
class Back {
    constructor() {
        this.isRestApi = true;
    }
    createApi() { }
}
function isBack(dev) {
    return dev.createApi;
}
function writeCode(dev) {
    // if(dev.isRestApi) {
    //     dev.
    // }
    if (isBack(dev)) {
        dev.createApi();
    }
}
//# sourceMappingURL=index.js.map