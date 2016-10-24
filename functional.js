var arr1 = [1,2,3,4,5];

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  };
  return newArr;
}

var arr2 = mapForEach(arr1, function(item) {
  return item * 10;
});

var limiterFn = function(limiter, item) {
  return item > limiter;
}

var generalizedLimiterFn = function(limiter) {
  return function(limiter,item) {
    return item > limiter;
  }.bind(this,limiter);
}

var arr3 = mapForEach(arr2, limiterFn.bind(this, 10));
var arr4 = mapForEach(arr1, generalizedLimiterFn(2));

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

(function() {
  console.log("This instance: " + this);
}());
