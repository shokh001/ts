//TS => generic type

// class List<T> {
//     elements: T[] = [];

//     add(element: T): void {
//         this.elements.push(element);
//     }
// }


// let list = new List<number | string>();

// list.add(12);
// list.add(19);
// list.add('str');

// console.log(list);


// let list2 = new List<boolean | undefined>();

// list2.add(undefined);
// list2.add(false);

// console.log(list2);

interface IList<T> {
    elements: T[];
    add(element: T): void;

    // new(name: string, age: number): void; // -> constructor
}

type ListType = string | number | boolean;

class List implements IList<ListType> {
    elements: ListType[] = [];

    add(element: ListType): void {
        this.elements.push(element);
    }
}

let list = new List();

list.add(12);
list.add('str');
console.log(list);
