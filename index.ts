//TS => [puclic, private, protected, (readonly)]

// private --> faqat classni uzida ishlatsa buladi voris olingan class
// yoki yasalgan objectda emas

// protected --> classni uzida ishlatsa va voris olingan class da ishlatsa buladi
// lekin yasalgan objectda emas

// readonly --> qaysiki constantaga o`xshash ishlaydi.

class Person {
    // public _name: string = '';
    // private _name: string = '';
    // protected _name: string = '';
    public readonly _name: string = '';
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // constructor(public name: string, private age: number) { }
    // constructorda puclic, private va protected

    sayHello(): string {
        return `Assalomu alaykum. Men ${this._name}man`
    }
}

class Student extends Person {
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

const dilmurod: Person = new Person('Dilmurod', 23);
console.log(dilmurod);
// dilmurod._name = 'Sardor' error


const shoh: Student = new Student('Shohjahon', 22, '213-19', 4);
console.log(shoh);

