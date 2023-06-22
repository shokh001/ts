//TS => Arrays, Tuples & Enums

let a = []; // --> this is any type
a = [12, 'sdf', true, undefined, {}];

// let b = [1, 2, 3, 4];
// b = ['str']; error

// array elon qilish
let b: number[]; // 1-way
b = [11, 12];

let c: Array<number> = [1]; // 2-way


let unionArr: (number | string)[] = [1212, 'str'];
let unionArr2: Array<boolean | number> = [false, 42342];


// tuples --> element typelariga shablon -> kortejlar

let tup: [number, string];
tup = [12, 'sfds'];
// tup = ['ssf', 242]  error
// tup = [2423, 'qe', 'sdfsd']  error

let tup2: [number, string[]];
tup2 = [2423, ['qe', 'sdfsd']]

// ENUMS --> qayta hisoblash

enum gender {
    male,
    female
}

// console.log(gender[gender.male]); // log => male


// enum g {
//     a,
//     b = 10,
//     c
// }
// console.log(g.a, g.b, g.c); //log => 0, 10, 11 

// bu yuerda property string bulgani uchun value orqali keyni ola olamymz
// chunki bunaqa value dagi key bulsa ushani qiymatini olib kelib quyadi
enum h {
    a = 'Hi',
    b = 'TS'
}

// console.log(h.a, h.b);

// complatsiya bo`lmaydi jarayon cont orqali qilinsa
// faqat natija chiqadi
const enum i {
    a,
    b
}

console.log(i.a, i.b);
