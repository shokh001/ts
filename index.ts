// TypeScript ! operator va foydalanuvchi malumotlari tekshirish

interface IProduct {
    name: string,
    weight?: number
}

function calcWeight(products: IProduct[]): number {
    let s: number = 0;

    products.forEach(item => {
        s += item.weight!; // objectni ichida aniq weight degan field borligini bilganimzda ishlatamiz ! ni
    })

    return s;
}

const res: number = calcWeight([
    { name: 'item 1', weight: 1 },
    { name: 'item 2', weight: 2 },
    { name: 'item 3', weight: 3 },
])

console.log(res);

let a: number | undefined | null = null;

setTimeout(() => {
    a = 20
}, 500)

setTimeout(() => {
    let b: number = a!;
    console.log(b);
}, 1000)

// let c!: string;
// console.log(c)

class Front {
    isRestApi: boolean = false
}

class Back {
    isRestApi: boolean = true

    createApi() { }
}

function isBack(dev: any): dev is Back {
    return dev.createApi;
}

function writeCode(dev: Front | Back) {
    // if(dev.isRestApi) {
    //     dev.
    // }
    if (isBack(dev)) {
        dev.createApi();
    }
}
