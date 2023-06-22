"use strict";
//TS => classes
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    info(value) {
        return `${this._name} - ${this._age + value} da`;
    }
    static description() {
        return 'Bu klass Person haqida';
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error('Notugri yosh');
        }
    }
}
Person.isFly = false; // static kalit suzi bilan e`lon qilingan maydon classni uziga tegishli buladi undon olingan obyetga emas
const shoh = new Person('shoh', 22);
const dilmurodov = new Person('Dilmurodov', 22);
// console.log(shoh);
// console.log(dilmurodov);
// console.log(shoh.info(2));
// console.log(Person.description());
shoh.age = 24;
// console.log(shoh);
if (shoh instanceof Person) { // instanceof object classga tegishli ekanliligini tekshiradi
    console.log(true);
}
else {
    console.log(false);
}
//# sourceMappingURL=index.js.map