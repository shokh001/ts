"use strict";
//TS => [puclic, private, protected, (readonly)]
// private --> faqat classni uzida ishlatsa buladi voris olingan class
// yoki yasalgan objectda emas
// protected --> classni uzida ishlatsa va voris olingan class da ishlatsa buladi
// lekin yasalgan objectda emas
// readonly --> qaysiki constantaga o`xshash ishlaydi.
class Person {
    constructor(name, age) {
        // public _name: string = '';
        // private _name: string = '';
        // protected _name: string = '';
        this._name = '';
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    // constructor(public name: string, private age: number) { }
    // constructorda puclic, private va protected
    sayHello() {
        return `Assalomu alaykum. Men ${this._name}man`;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = '';
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    sayHello() {
        const parent = super.sayHello();
        return `${parent} Salom`;
    }
    info() {
        return `${this._name}`;
    }
}
const dilmurod = new Person('Dilmurod', 23);
console.log(dilmurod);
// dilmurod._name = 'Sardor' error
const shoh = new Student('Shohjahon', 22, '213-19', 4);
console.log(shoh);
//# sourceMappingURL=index.js.map