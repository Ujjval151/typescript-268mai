// define constant
//const myConst = 'my const value';

// define variable
//let myVar: number = 123;

// define object literal
//const myObjectLiteral = {
//firstName: 'Stephen',
//lastName: 'King',
//};

// define interface
//interface Person {
//firstName: string;
//lastName: string;
//age?: number;
//}

// define object literal with type
//const myObjectLiteral2: Person = {
//firstName: 'Stephen',
//lastName: 'King',
//age: 60,
//};

// define array
//const array: number[] = [1, 2, 3, 4];

// define array with multiple types
const array2 = [1, 'someString', {}, []];

// define function, function expression and arrow function
//function myFunction(arg: string, arg2?: string): string {
//return arg;
//}

let functionExpression = function (arg: string) {
  return arg;
};

let arrowFunction = (arg: string) => {
  return true;
};

// callbacks in array functions
array.filter((num) => num > 2);

// spread operator, copy object, copy array
const copiedPerson: Person = {
  ...myObjectLiteral,
  lastName: 'changedProperty',
};

const copiedArray = [...array];
