"use strict";
//TS => Tiplarni o'zgartirish va birlashtirish
// havfli usul
let a = 10;
let b = a;
// yaxshi usul
// unknown any ga ekvavalent
let c = 20.224234;
// let d: number = c; error
let e = c; // --> type change first way
let f = c; // --> type change second way
// (c as number).toFixed(2) mehtodlarni ishlatish
// (<number>c).toString() mehtodlarni ishlatish
// union types --> tiplar birlashmasi
let h = 10;
h = 'str';
// h = true error
// literal types --> faqat belgilangan typelarni qabul qiladi
let s;
s = 'sm';
let s2 = "MD";
s2 = "LG";
s2 = "SM";
let s3 = false;
s3 = "MD";
let obj;
// obj = {}  error
obj = { name: 'Shoh' };
obj = { age: 22 };
obj = { name: 'Shohjahon', age: 22 };
let obj2;
obj2 = { name: 'Dilmurod', age: 22 };
let obj3 = { name: 'Shoh' };
obj3 = { name: 'Shoh', age: 22 };
// obj3 = { age: 22 }; error
if ('age' in obj3) { // in operatori
    console.log('Have');
}
else {
    console.log('Don`t have');
}
//# sourceMappingURL=index.js.map