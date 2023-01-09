// // define constant
 const myConst = 'my const value';

// // define variable
 let myVariable: number = 123;

// // define object literal
 const objectLiteral = {
   firstName: 'Ujjval',
   lastName: 'Kumar',
 };

// // define interface
 interface Person {
  firstName: 'String';
   lastName: 'String';
   age?: number;
 }

// // define object literal with type
 const person: Person = {
   firstName: 'String',
   lastName: 'String',
// };

// // define array
 const array: number[] = [1, 2, 3, 4];

// // define array with multiple types
 const array2: any[] = [1, 'someString', {}, []];

// // define function, function expression and arrow function
function myFunction(arg: string, arg2?: string): string {
  return arg;
}
// }

// let functionExpression = function (args) {
//   return 'whatever';
// };

// let arrowFunction = (arg: string) => {
//   return true;
// };

// // callbacks in array functions
// array.filter((arrayItem) => arrayItem > 0);

// // spread operator

// const copiedPerson: Person = {
//   ...person,
//   lastName: 'new Name',
// };

// const copiedArray = [...array];
