/**
  A closure consists of a wrapping function which takes an argument and creates a scope for it,
  and returns a new function, which purpose is to be called at a later time, but when it's called
  it uses the variable (index) at the point which the closure was instantiated
**/

(function(){
    var messages = ['hello','world'];
    var say = function(index) {         //we create a wrapper function which takes a parameter (creates a new scope for the passed variable)
        return function() {             //a new function is returned
            console.log(messages[index]);
        };
    };
    for (var i in messages) {
      setTimeout(say(i), 1000);
    }
})();

/**
  In this case, 'world' would have been printed twice, because setTimeout()
  delays the call of the function, and by the time console.log is called, i has value 1

      var messages = ['hello','world'];
      for (var i in messages) {
        setTimeout(function() {
            console.log(messages[i]);
        }, 1000);
      }
**/
