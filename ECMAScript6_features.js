"use strict";

/**
    Let and const
    Always try to use let, in order to limit the variables scope.
    Use const for constants :)
**/
let globalName = "##### SPECIAL VALUE ########";
const PI = 3.14;

/**
    Big arrow functions
    Another valid notation (when there's only a return statement)
    param1 => param1 + " the param is returned ";

**/
var bigArrowFn = (param1) => {
    console.log("Inside fn: " + param1);
    return param1;
}

/**
    Templates
    BE CAREFUL TO USE ` NOT '
    Templates also allow to use \n new line spaces
**/
console.log('This is a very looooooooong string " + globalName + " let\'s continue this looong string');
console.log(`This is a string using
             template: ${globalName} let\'s continue this looong string`);

/**
    Spread operator
    instead of addNumbers(nums[0], nums[1], nums[2]) use the spread operator ...nums
**/
var addNumbers = (a, b, c) => a + b + c;
var nums = [4, 4, 6];
console.log(addNumbers(...nums));

var meats = ["bacon", "ham", "beef"];
var others = ["apples", ...meats, "oranges", "juice"];
console.log(others);

/**
    Classes
**/

class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight() {
        console.log(this.weight);
    }
}

let george = new Person('George Georgey', 22, 78);
