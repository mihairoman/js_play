var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;
}

/*
    Javascript inheritance at work
*/
var Employee = function(firstName, lastName, employeeId) {
    Person.call(this, firstName, lastName);
    this.employeeId = employeeId;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //the original constructor is overwritten in the previous step

Employee.prototype.getName = function() {
    var personName = Person.prototype.getName.call(this);   //calls the super class functionality
    return employeeId + ' ' + personName;
}
