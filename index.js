"use strict";
//TS => classes & inheritance
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu alaykum ${this._name}`;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    sayHello() {
        const parentFunc = super.sayHello(); // otasidagi methoddan meros olish
        return `${parentFunc}. Men ${this._course} kursda o'qiyman`;
    }
}
class Teacher extends Person {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
    info() {
        const parent = super.sayHello();
        return `${parent}. Men o'qituvchiman`;
    }
}
const shoh = new Person('Shohjahon', 22);
console.log(shoh);
console.log(shoh.sayHello());
const dilmurod = new Student('Dilmurod', 23, '213-19', 4);
console.log(dilmurod);
console.log(dilmurod.sayHello());
const newDilmurod = dilmurod;
// newDilmurod.
console.log(newDilmurod);
console.log(newDilmurod.sayHello());
const abror = new Teacher("Abror", 32, ['React, JS, TS']);
console.log(abror);
console.log(abror.info());
//# sourceMappingURL=index.js.map