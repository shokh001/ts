"use strict";
//TS => interface
// type iPerson = {
//     _name: string;
//     _age: number;
//     sayHello(): string;
// }
// interface iPerson {
//     _name: string;
//     _age: number;
// }
// interface iPerson {
//     sayHello(): string;
// }
//-------interfacelar bir xil nomda bulishi mumkin natija hammasini yigindisi bo`ladi
// type iPerson = {
//     _name: string;
//     _age: number;
// }
// type iPerson = {
//     sayHello(): string;
// }
//------- typelarda ikkita bir xil nom bulamaydi
// interface iPersonProps {
//     _name: string;
// }
// interface iPersonProps2 {
//     _age: number;
// }
// interface iPerson extends iPersonProps, iPersonProps2 {
//     sayHello(): string;
// }
//------- interfacelarda 1 dan ortiq interfacedan voris olish mumkn
// type iPersonProps = {
//     _name: string;
// }
// type iPersonProps2 = {
//     _age: number;
// }
// type iPerson = iPersonProps & iPersonProps2 & {
//     sayHello(): string;
// }
//------- typelarda voris olib bulmaydi lekn birlashtirish mumkn
class Person {
    constructor(name, age) {
        this._name = '';
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu alaykum. Men ${this._name}man`;
    }
}
class Student extends Person {
    constructor() {
        super(...arguments);
        this._group = '';
        this._course = 0;
    }
    sayHello() {
        const parent = super.sayHello();
        return `${parent} Salom`;
    }
}
const shoh = new Person('Shohjahon', 22);
console.log(shoh);
//# sourceMappingURL=index.js.map