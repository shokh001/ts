//TS => classes

class Person {
    _name: string;
    _age: number

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age
    }

    info(value: number): string {
        return `${this._name} - ${this._age + value} da`
    }

    static isFly = false; // static kalit suzi bilan e`lon qilingan maydon classni uziga tegishli buladi undon olingan obyetga emas
    static description(): string {
        return 'Bu klass Person haqida'
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value > 0 && value < 100) {
            this._age = value
        } else {
            throw new Error('Notugri yosh')
        }
    }
}

const shoh: Person = new Person('shoh', 22);
const dilmurodov: Person = new Person('Dilmurodov', 22)

// console.log(shoh);
// console.log(dilmurodov);
// console.log(shoh.info(2));
// console.log(Person.description());
shoh.age = 24;
// console.log(shoh);

if(shoh instanceof Person) { // instanceof object classga tegishli ekanliligini tekshiradi
    console.log(true);    
} else {
    console.log(false);
    
}


