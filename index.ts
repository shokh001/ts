//TS => abstract class

interface iPerson {
    _name: string;
    _age: number;
    sayHello(): string;
    info(): string;
}

interface iStudent extends iPerson {
    _group: string;
    _course: number;
}

abstract class Person implements iPerson {
    // abstract classlar faqat voris olish uchun ishlatladi
    // va ulardan object hosil qila olmaymiz
    // abstract classlar ichida abstract methodlar yaratish mumkn
    // abstract methodlar vorislik olinayotgan classlarda qo'llanilishi majburiy
    _name: string = '';
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    sayHello(): string {
        return `Assalomu alaykum. Men ${this._name}man`
    }

    abstract info(): string;
}

class Student extends Person implements iStudent {
    _group: string = '';
    _course: number = 0;

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age);
        this._group = group;
        this._course = course
    }

    sayHello(): string {
        const parent = super.sayHello();
        return `${parent} Salom`
    }

    info(): string {
        return `${this._name}`
    }
}

// const dilmurod: iPerson = new Person('Dilmurod', 23);

const shoh: iStudent = new Student('Shohjahon', 22, '213-19', 4);
console.log(shoh);
console.log(shoh.info());

