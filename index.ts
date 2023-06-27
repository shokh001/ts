// TypeScript Mustahkamlash (abstract & modules)

abstract class ComputerFiles {
    abstract name: string;
    abstract show(): void;

    abstract set size(value: number);
    abstract get size(): number;
}

class TextFile extends ComputerFiles {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    show(): void {
        console.log(this.size);

    }
}

// namespace & module

namespace Photos {
    export class JPEG { }
    export class PNG { }
}

module Videos {
    export class MP4 { }
    export class AVI { }
}