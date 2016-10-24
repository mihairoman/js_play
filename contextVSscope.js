/**
    - "new" objects create context
    - "this" is assigned to the object instance that INVOKES the method !!!!!!
**/

var person = {
    firstName: 'John',
    lastName: 'Doe',
    sayName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

setTimeout(person.sayName, 1000); // THIS WILL RETURN " undefined undefined " because this is assigned to the
                                 //object instance that invoked the methods, in this case setTimeout

person.sayName(); //in this case person invokes the method => this is assigned to person

/*
    bind makes sure to assign the "this" pointer to the desired object
*/
setTimeout(person.sayName.bind(person), 1000);
