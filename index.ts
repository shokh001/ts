//TS => classes & inheritance

class Person {
    _name: string = "";
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age
    }

    sayHello(): string {
        return `Assalomu alaykum ${this._name}`
    }
}

class Student extends Person {
    _group: string = "";
    _course: number = 0;

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age)
        this._group = group;
        this._course = course;
    }

    sayHello(): string {
        const parentFunc = super.sayHello() // otasidagi methoddan meros olish
        return `${parentFunc}. Men ${this._course} kursda o'qiyman`;
    }
}

class Teacher extends Person {
    disciplines: string[] = [];

    constructor(name: string, age: number, disciplines: string[]) {
        super(name, age);
        this.disciplines = disciplines
    }

    info():string {
        const parent = super.sayHello()
        return `${parent}. Men o'qituvchiman`
    }
}

const shoh: Person = new Person('Shohjahon', 22);
console.log(shoh);
console.log(shoh.sayHello());

const dilmurod: Student = new Student('Dilmurod', 23, '213-19', 4)
console.log(dilmurod);
console.log(dilmurod.sayHello());


const newDilmurod: Person = <Person>dilmurod;
// newDilmurod.
console.log(newDilmurod);
console.log(newDilmurod.sayHello());

const abror: Teacher = new Teacher("Abror", 32, ['React, JS, TS'])
console.log(abror);
console.log(abror.info());
