//TS => namespace

namespace Utils {
    export function log(text: string, color: string, fontSize?: string): void {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        } else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }

    log("Salom", 'red', '30px')
    log("Salom", 'blue')
}

Utils.log('Dunyo', 'green', '24px')

namespace Animals {
    export abstract class Animal {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }

        abstract say(): void;
    }
}

namespace Animals {
    export class Lion extends Animals.Animal {
        private sound: string;
        #sound: string; // 2-way is good way because we can catch errors correctly

        constructor(name: string, sound: string) {
            super(name);
            this.sound = sound
            this.#sound=sound
        }

        say(): void {
            Utils.log(`${this.name} - ${this.sound}, ${this.#sound}`, 'blue', '24px')
        }
    }


    export namespace Pets {
        export class Cat extends Animals.Animal {
            private sound: string;

            constructor(name: string, sound: string) {
                super(name);
                this.sound = sound;
            }

            say(): void {
                Utils.log(`${this.name} - ${this.sound}`, 'blue', '24px')
            }
        }
    }
}

const lion = new Animals.Lion('Lion', 'rrrr');
// console.log(lion.sound);
console.log(lion.#sound);

// const cat = new Animals.Pets.Cat('Cat', 'miyov');

// lion.say()
// cat.say()
