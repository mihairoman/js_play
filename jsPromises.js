var img1 = document.querySelector('.img-1');
img1.addEventListener('load', function() {
    // woo yey image loaded
});
img1.addEventListener('error', function() {
    // argh everything's broken
});

/* Unfortunately, in the example above, it's possible that the events happened before we started listening for them,
  so we need to work around that using the "complete" property of images:
  N.B.: IMAGES have the 'complete' property which return true if the image has finished loading
  */

var img1 = document.querySelector('.img-1');

function loaded() {
    //some logic
}

if (img1.complete) {
    loaded();
} else {
    img1.addEventListener('load', loaded);
}

img1.addEventListener('error', function() {
    //some logic
});

/* This doesn't catch images that error'd before we got a chance to listen for them, unfortunately the DOM doesn't give us a way to do that.
   Also, this is loading one image, things get even more complex if we want to know when a set of images have loaded.
   Events are great for things that can happen multiple times on the same object — keyup, touchstart etc.
   With those events you don't really care about what happened before you attached the listener. But when it comes to async success/failure, ideally you want something like:*/

img1.callThisIfLoadedOrWhenLoaded(function() {
    // loaded
}).orIfFailedCallThis(function() {
    // failed
});

// and…
whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
    // all loaded
}).orIfSomeFailedCallThis(function() {
    // one or more failed
});

/* This is what promises do, but with better naming. If HTML image elements had a "ready" method that returned a promise, we could do */
img1.ready().then(function() {
    //loaded
}, functon() {
    //failed
});

Promise.all([img1.ready(), img2.ready()]).then(function() { /* All loaded */ }, function() { /* One or more failed */ });
/*
    ### A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa
    ### If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier
    !!!!!!!!!!!!!!!! A PROMISE CAN BE:
                    > fulfilled - The action relating to the promise succeeded
                    > rejected - The action relating to the promise failed
                    > pending - Hasn't fulfilled or rejected yet
                    > settled - Has fulfilled or rejected
*/
