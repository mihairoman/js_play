function simpleFactorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * simpleFactorial(n-1);
  }
}

/*
  n = 3
  fact(3) -> 3 * fact(2)
  3 * (2 * fact(1))
  3 * (2 * 1)
  3 * 2
  6
*/

function tailFactorial(n) {
  function recursiveFn(n, acc) {
    if (n <= 1) {
      return acc;
    }
    return recursiveFn(n - 1, n * acc);
  }
  return recursiveFn(n, 1);
}

/*
  n = 3
  tailFactorial(3) -> recursiveFn(3, 1)
  recursiveFn((3-1), (3*1))
  recursiveFn(2, 3)
  recursiveFn((2 -1), (2*3))
  recursiveFn(1, 6)
  6
*/

function fibb(n) {
  function recursive(n, a, b) {
      console.log(b);
      if (n == 0) {
          return b;
      }
      return recursive(n-1, a+b, a);
  }
  return recursive(n, 1, 0);
}
