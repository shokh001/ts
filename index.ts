// TypeScript BigInt

console.log("Number.MAX_VALUE = ", Number.MAX_VALUE);
console.log("Number.MAX_SAFE_INTEGER = ", Number.MAX_SAFE_INTEGER);
console.log("9007199254740991 + 2 = ", 9007199254740991 + 2);

// let a: bigint = 12; error

let a: bigint = 12n;
// let b: bigint = 12.3n; kasr yozib bulmaydi bigintda

console.log('a = ', a);

// let c: bigint = <bigint>12; error
// let d: bigint = 12 as bigint; error
let e: bigint = BigInt(12);

console.log('e = ', e);

console.log('10n / 3n = ', 10n / 3n); // 3n

console.log("BigInt 9007199254740991 + 2 = ", BigInt(9007199254740991) + 2n);



