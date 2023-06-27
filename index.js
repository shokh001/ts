"use strict";
// TypeScript generic type (extends, ternar)
function getName(person) {
    console.log(person.name);
}
getName({ name: "Ismoil" });
function getProperty(obj, key) {
    return obj[key];
}
const result = getProperty({ name: "Shohjahon", age: 23, lastName: "Dilmurodov" }, "lastName");
//# sourceMappingURL=index.js.map