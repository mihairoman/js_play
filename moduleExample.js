//Module pattern
var Alert = (function(){
    var messages = [];  //this a private variable that cannot be accessed outside the self executed anonymous function

    return {    //returns an object (public interface for Alert)
        add: function(message) {
            messages.push(message);
        },
        log: function() {
            console.log(messages);
        }
    }
})();

/*******************************************************************************************************************/

//Common.Js Module pattern
//for example this would be in an alert.js file
module.exports = function(options){
    var messages = [];  //this a private variable that cannot be accessed outside the self executed anonymous function

    return {    //returns an object (public interface for Alert)
        add: function(message) {
            messages.push(message);
        },
        log: function() {
            console.log(messages);
        }
    }
};

//in another file, example index.js,
var myAlert = require('alert')({
    separator: ' ';               //we can define custom options
});

/*******************************************************************************************************************/
//another module example

var Person = (function(){
    var someVar = 0; //private var

    var Person = function() {

    };

    Person.findOne = function() {

    };

    return Person;
})();
