// TypeScript generic type (extends, ternar)

// type A<T> = T;
// type B = A<string>;
// type C = A<"TS">;
// type D = A<number>;

// type A<T extends string> = T;
type A<T> = T extends string ? string : never;

type B = A<string>;
type C = A<"JS">;
type D = A<number>;

// function getName<T extends { name: string }>(person: T): void {
//   console.log(person.name);
// }

// getName({ name: "Shohjahon", age: 23 });

// getName({ age: 23 });

interface IName {
  name: string;
}

function getName<T extends IName>(person: T): void {
  console.log(person.name);
}

getName({ name: "Ismoil" });
// getName({ age: 23 });

// =======================================================================

interface Inter {
  a: string;
  b: boolean;
  c: number;
}

type InterKeys = keyof Inter; // a | b | c

function getProperty<ObjType, ObjKey extends keyof ObjType>(
  obj: ObjType,
  key: ObjKey
) {
  return obj[key];
}

const result = getProperty(
  { name: "Shohjahon", age: 23, lastName: "Dilmurodov" },
  "lastName"
);