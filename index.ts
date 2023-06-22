//TS => Tiplarni o'zgartirish va birlashtirish

// havfli usul
let a: any = 10;
let b: number = a;

// yaxshi usul
// unknown any ga ekvavalent
let c: unknown = 20.224234;
// let d: number = c; error

let e: number = <number>c; // --> type change first way
let f: number = c as number; // --> type change second way
// (c as number).toFixed(2) mehtodlarni ishlatish
// (<number>c).toString() mehtodlarni ishlatish

// union types --> tiplar birlashmasi
let h: number | string = 10;
h = 'str';
// h = true error

// literal types --> faqat belgilangan typelarni qabul qiladi
let s: "sm" | "md" | "lg" | boolean;
s = 'sm';
// s ='a' error
// s=10 error


// type aliases --> tipga nom berib typelarni yig`ib olish va type sifatida ishlatish

type Sizes = "SM" | "MD" | "LG" | boolean;
let s2: Sizes = "MD";
s2 = "LG";
s2 = "SM";

let s3: Sizes = false;
s3 = "MD";

type OBJ = { name: string } | { age: number };
let obj: OBJ;

// obj = {}  error
obj = { name: 'Shoh' };
obj = { age: 22 };
obj = { name: 'Shohjahon', age: 22 };


type OBJand = { name: string } & { age: number };
let obj2: OBJand;

obj2 = { name: 'Dilmurod', age: 22 }
// obj2 = { name: 'Dilmurod'} error
// obj2 = { age: 22} error

type OBJ3 = { name: string, age?: number }; // option maydon ? orqali kiritiladi
let obj3: OBJ3 = { name: 'Shoh' };
obj3 = { name: 'Shoh', age: 22 };
// obj3 = { age: 22 }; error


if ('age' in obj3) { // in operatori
    console.log('Have');
} else {
    console.log('Don`t have');
}