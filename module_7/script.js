/*Задание 7.7.1*/
const person = {
  name: "John",
  age: 21,
};
function printInfo() {
  console.log(`Name: ${this.name}, age: ${this.age}`);
}
printInfo.call(person);

/*Задание 7.7.2*/
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
const arr = [2, 3, "+"];
console.log(calculate.apply(null, arr));

/*Задание 7.7.3*/
const users = [
  { name: "John", age: 21 },
  { name: "Liza", age: 18 },
  { name: "Luke", age: 15 },
];
const usersAge = users.filter((user) => user.age >= 18);
const usersNameAge = usersAge.map((user) => user.name);
const usersName = users.map((user) => user.name);
console.log(usersNameAge);
console.log(usersName);

/*Задание 7.7.4*/
function setFullName (fullName) {
    this.fullName = fullName;
};
const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person.fullName);
/*Задание 7.7.5*/
function sortedUniqueNumbers(array) {
    const uniqueNumbers = [...new Set(array)];
    const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    return sortedNumbers;
  }
  const array = [1, 2, 1, 2, 5, 6, 7, 3, 3, 9, 8, 4, 4];
  const uniqueSortedNumbers = sortedUniqueNumbers(array);
  console.log(uniqueSortedNumbers)