// TypeScript Nullish assigment vs chaining operator

// Nullish assigment -> null yoki undefinedga tneg bulsa boshqa narsani oladi

let a: number | null | undefined = null;
a = undefined;
a = 20;
let b: number = a ?? 0;
// || va ?? farqi yoki operatori false bulgan barchasini qabul qiladi ?? esa faqat null va undefinedni
// console.log(b);


// chaining
// const obj = {
//     user: {
//         name: '',
//         country: {
//             region: "",
//         }
//     }
// }

// const obj2 = {
//     user: {
//         name: '',
//         country: null
//     }
// }

// console.log(obj.user.country?.region);

function sum(x: number, y: number, cb?: (v: number) => void): number {
    let natija: number = x + y;
    // if (cb) {
    //     cb(natija);
    // }
    cb?.(natija)
    return natija;
}

// const res: number = sum(3, 5, (e) => console.log("callback: ", e)
// );

// console.log('res = ', res);

type arr = ({ price: number } | null | undefined)[];

function calcPrice(arr: arr): number {
    let s: number = 0;
    arr.forEach(element => {
        s += element?.price ?? 0
    });
    return s;
}

const result: number = calcPrice([
    { price: 1 },
    null,
    { price: 4 },
    undefined
])

console.log(result);
