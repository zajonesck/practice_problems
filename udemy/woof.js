let myName = "Zack";
console.log(myName);

myName = "Cope";
console.log(myName);

function printMyName(name) {
  console.log(name);
}
const arrowPrintMyName = (name) => {
  console.log(name);
};

printMyName("Zack");

arrowPrintMyName("Zack");

const longMultiply = (number) => {
  return number * 2;
};

//when all you do is return in function you can omit {} and return keyword

const multiply = (number) => number * 2;

console.log(multiply(2));

class Human {
  //The constructor method is a special method of a class for creating and initializing an object instance of that class.

  gender = "male";

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = "Zack";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

//spread and rest operators ...
//spread: split up arrary elements or object prop
//rest: merge list of function arguments into an array

const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];

const newSpreadNumbers = [...numbers, 4];
console.log("no spread", newNumbers);
console.log("Spread", newSpreadNumbers);

const cat = {
  name: "Cope",
};

const newCat = {
  ...person,
  age: 28,
};

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));

///destructuring

//labels and pulls out objects

const destNumbers = [1, 2, 3];

[num1, num2] = destNumbers;
console.log(num1, num2);

const number = 1;
const num3 = number;

console.log(num3);

const dog = {
  fruit: "Bear",
};
console.log(dog);

///spread creates real copy not pointer... copies properties and not entire object
const secondDog = { ...dog };
dog.fruit = "benny";
console.log(dog);
console.log(secondDog);

const numbs = [1, 2, 3];

const doubleNumArray = numbs.map((num) => {
  return num * 2;
});
console.log(numbs);
console.log(doubleNumArray);
