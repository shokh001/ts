// TypeScript Utils
// Utils -> Parameters, ConstructorParameters, ReturnType, InstanceType

function func1(x: string, y: number): boolean {
    return x.length > y.toString().length;
}

type A = typeof func1;

// Parameters
type B = Parameters<A>; // -> [x: string, y: number]

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => any ? U : any

type B2 = MyParameters<A> // -> [x: string, y: number]

// ConstructorParameters
class Class1 {
    a: number;
    b: string;

    constructor(a: number, b: string) {
        this.a = a;
        this.b = b;
    }
}

type C = typeof Class1; // -> Class1

type D = ConstructorParameters<C>; // -> [a: number, b: string]

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer U) => any ? U : any

type D2 = MyConstructorParameters<C> // -> [a: number, b: string]

// ReturnType

type E = ReturnType<A>; // -> boolean

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : never

type E2 = MyReturnType<A>; // -> boolean

// InstanceType

type F = InstanceType<C>; // -> Class1;

type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer U ? U : never

type F2 = MyInstanceType<C>; // -> Class1;