let id: number = 2;
let company: string = 'Google';
let isPublished: boolean = true;
let x: any = 'Hello';
// x = "World";

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, 'Hello', false]; // any type if we dont know the type

// Tuples
let person: [number, string, boolean] = [1, 'Hello', true]; // we have to specify at the exact spot of type the vaues we are specifying


// Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Mark'],
    [2, 'John'],
    [3, 'Mary']
]

// Union Types // union types are used like this
let pid: string | number = 22;
pid = 'Hello';

//  Enum 
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects 
type User = {
    id: number,
    name: string,
}
const user: User = {
    id: 1,
    name: 'John',
}


// const user: { id: number, name: string } = {
//     id: 1,
//     name: 'John',
// }

// Type Assertions ----------------------
let cid: any = 1;

// first way
let customerId: number = <number>cid;
//  second way ----------------------
let customerId1: number = cid as number;


// Functions --------------------------------
function addNum(x: number, y: number): number {
    return x + y;
}
// console.log(addNum(1, 2));

function log(message: string | number): void {
    console.log(message);
}
// log('Hello');


// Interfaces --------------------------------
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number, // optional property
}
const user1: UserInterface = {
    id: 1,
    name: 'John',
}

// user1.id = 1; // we can't assign the id

// type can be use with Primitive and Union Types ---------------
type Point = number | string;
const p1: Point = 1;

// in the case of Object you can use the interface
// But Interface can not be use like that ---------------
// interface Point = number | string; this give error

// Interface with Function -----------------------------------
interface myFunc {
    (x: number, y: number): number;
}

const add: myFunc = (x: number, y: number): number => x + y;
const sub: myFunc = (x: number, y: number): number => x - y;

// Classes ----------------------------------------------------

interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}
class Person implements PersonInterface {
    id: number;
    // protected id: number;

    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is registered`;
        // return 1; if i return number it should get error beacuse of the return type is string
    }
}
// const brad: Person = new Person(1, 'Brad');
// const mike: Person = new Person(2, 'Mike');

//  -> subClasses 
class Employee extends Person {
    position: string;
    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

}

const emp = new Employee(1, 'Shawn', 'Software Engineer');

console.log(emp.name);
console.log(emp.register());

// brad.id = 5; it is privat show we can access outside the class
// brad.id = 5; it is protected show we can access outside the class we can access only in this class or extended calss
// console.log(brad, mike);
// console.log(brad.register());



//  Generics ----------------------------------------------------
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray: number[] = getArray<number>([1, 2, 3, 4]);
let strArray: string[] = getArray<string>(['Hello', 'World', 'Jill']);
numArray.push(5)
strArray.push('Hello')
console.log(numArray); // it expect number
console.log(strArray);; // it expect string

// console.log(Direction1.Up);
// ids.push('Hello'); it show error beacuse ids is number[]
// id = "3"; this will not work
// id=  "string" this show error beacuse id is number  