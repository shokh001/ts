"use strict";
//TS => generic type
class List {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
let list = new List();
list.add(12);
list.add('str');
console.log(list);
//# sourceMappingURL=index.js.map