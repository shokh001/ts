"use strict";
//TS => namespace
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log("Salom", 'red', '30px');
    log("Salom", 'blue');
})(Utils || (Utils = {}));
Utils.log('Dunyo', 'green', '24px');
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    class Lion extends Animals.Animal {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        say() {
            Utils.log(`${this.name} - ${this.sound}`, 'blue', '24px');
        }
    }
    Animals.Lion = Lion;
    let Pets;
    (function (Pets) {
        class Cat extends Animals.Animal {
            constructor(name, sound) {
                super(name);
                this.sound = sound;
            }
            say() {
                Utils.log(`${this.name} - ${this.sound}`, 'blue', '24px');
            }
        }
        Pets.Cat = Cat;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
const lion = new Animals.Lion('Lion', 'rrrr');
const cat = new Animals.Pets.Cat('Cat', 'miyov');
lion.say();
cat.say();
//# sourceMappingURL=index.js.map