//TS => interface

interface iPerson {
    _name: string;
    _age: number;
    // _age?: number;
    sayHello(): string;
}

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

class Person implements iPerson {
    _name: string = '';
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    sayHello(): string {
        return `Assalomu alaykum. Men ${this._name}man`
    }
}

interface iStudent extends iPerson {
    _course: number;
    _group: string;
}

class Student extends Person implements iStudent{
    _group: string = '';
    _course: number = 0;

    sayHello(): string {
        const parent = super.sayHello();
        return `${parent} Salom`
    }
}

const shoh: iPerson = new Person('Shohjahon', 22);
console.log(shoh);

