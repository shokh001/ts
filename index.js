"use strict";
//TS => abstract class
class Person {
    constructor(name, age) {
        // abstract classlar faqat voris olish uchun ishlatladi
        // va ulardan object hosil qila olmaymiz
        // abstract classlar ichida abstract methodlar yaratish mumkn
        // abstract methodlar vorislik olinayotgan classlarda qo'llanilishi majburiy
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
// const dilmurod: iPerson = new Person('Dilmurod', 23);
const shoh = new Student('Shohjahon', 22, '213-19', 4);
console.log(shoh);
console.log(shoh.info());
//# sourceMappingURL=index.js.map