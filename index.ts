// TypeScript Utils
// Utils -> Pick, Extract, Exclude, Omit

// Pick --> obyektdan biz aytgan fieldlarni kesib olib qaytaradi
type Vector = {
    x: number,
    y: number,
    z: number,
}

type Vector2 = Pick<Vector, 'x' | 'y'>
// type Vector2 = {
//     x: number;
//     y: number;
// }

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type Vector3 = MyPick<Vector, 'x' | 'z'>;
// type Vector3 = {
//     x: number;
//     z: number;
// }

// Extract --> ikkalasida ham borlarini qaytaradi
type A = string | number | boolean;
type B = string | boolean;

type C = Extract<A, B> // -> string | boolean

type MyExtract<T, U> = T extends U ? T : never;
type D = MyExtract<A, B>; // -> string | boolean

// Exclude --> ikkalasida ham mavjud bo`lmagan typelarni qaytaradi.
type E = Exclude<A, B> // -> number

type MyExclude<T, U> = T extends U ? never : T;
type F = MyExclude<A, B> // -> number

//Omit --> biz aytgan propertylarni kesib tashlab qolganini qaytaradi

type Person1 = { name: string, age: number, weight: number, height: number }
type Person2 = Omit<Person1, 'weight' | 'height'>
// type Person2 = {
//     name: string;
//     age: number;
// }

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type Person3 = MyOmit<Person1, 'weight'>
// type Person3 = {
//     height: number;
//     name: string;
//     age: number;
// }