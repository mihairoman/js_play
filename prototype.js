var personObj = {
  name : 'Default',
  surname : 'Default',
  getFullName : function () {
    return 'HI ' + this.name + ' ' + this.surname;
  }
};

var johnSmith = {
  name : 'John',
  surname : 'Smith'
}

var arr = [1,2,3];

/** Reflection in JavaScript.
 Looping through all the properties in the object
*/
for (var prop in personObj) {
  console.log(prop + ": " + personObj[prop]);
}

/**
** Attention! Arrays are objects in Javascript. This means that all the elements of the
** array are properties. When adding a new property with prototype, the newly added
** property will be displayed as well when itterating through the array with the "for in" loop.
** It is advised to use a simple "for" loop when using arrays
**/
for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}
// Constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(this);
}

/**
* The new keyword creates an empty object, then the Person function
* is invoked, where the "this" keyword points to the newly created empty object
**/
var tim = new Person('Tim','Burton');

/**
* Methods are better put in prototype because of memory efficiency. If we were
* to put the getFullName method directly in the Person object, each object created
* would have had a getFullName property. With prototype only one function object is created;
**/
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
}

Person.prototype.customFn = function() {
  return this.firstName + " YEAH!";
}

var john = new Person('John','Doe');
var jane = new Person('Jane','Bane');

var tom = Object.create(personObj);
console.log(tom);
