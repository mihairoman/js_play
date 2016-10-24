(function() {
    var person1 = {
        name: 'Tim',
        surname: 'Burton',
        getFullName: function() {
            var fullName = this.name + " " + this.surname;
            console.log(fullName);
        },
        getCustomName: function(firstName, secondName) {
            console.log(firstName + ' AND ' + secondName);
        }
    };

    var person2 = {
        name: 'Thomas',
        surname: 'Smith'
    };

    var person3 = {
        name: 'Ann',
        surname: 'Brown'
    };

    /*
      Use .bind() when you want that function to later be called with a certain context,
      useful in events. Use .call() or .apply() when you want to invoke the funciton immediately, and modify the context.
      Call/apply call the function immediately, whereas bind returns a function that when later executed will have the
      correct context set for calling the original function. This way you can maintain context in async callbacks, and events.
    */

    var showPerson1 = person1.getFullName();
    person1.getCustomName('George', 'Bush');
    //function currying
    var showPerson2 = person1.getFullName.bind(person2); //creates copy of function getFullName
    showPerson2();
    var showPerson2Custom = person1.getCustomName.bind(person2, 'Marty', 'Van');
    showPerson2Custom('Eddie', 'Rogers');

    var showPerson3 = person1.getFullName.call(person3); //directly calls/executes the function
    var showPersonCustom3 = person1.getCustomName.call(person3, "Oliver", "Gray");
    //function borrowing
    person1.getFullName.apply(person3);
    person1.getCustomName.apply(person3, [person3.name, person3.surname]);
    console.log(typeof(showPerson4));
    //setTimeout(function(){ console.log('Hello');},2000);
}());

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

dog.talk(); //woof

let tempDogFn = dog.talk; //undefined
let tempBoundFn = tempDogFn.bind(dog); //woof
