"use strict";
let id = 2;
let company = 'Google';
let isPublished = true;
let x = 'Hello';
// x = "World";
let ids = [1, 2, 3];
let arr = [1, 'Hello', false]; // any type if we dont know the type
// Tuples
let person = [1, 'Hello', true]; // we have to specify at the exact spot of type the vaues we are specifying
// Tuple Array
let employee;
employee = [
    [1, 'Mark'],
    [2, 'John'],
    [3, 'Mary']
];
// Union Types // union types are used like this
let pid = 22;
pid = 'Hello';
//  Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// const user: { id: number, name: string } = {
//     id: 1,
//     name: 'John',
// }
// Type Assertions ----------------------
let cid = 1;
// first way
let customerId = cid;
//  second way ----------------------
let customerId1 = cid;
// Functions --------------------------------
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
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
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Hello', 'World', 'Jill']);
numArray.push(5);
strArray.push('Hello');
console.log(numArray); // it expect number
console.log(strArray);
; // it expect string
// console.log(Direction1.Up);
// ids.push('Hello'); it show error beacuse ids is number[]
// id = "3"; this will not work
// id=  "string" this show error beacuse id is number  
