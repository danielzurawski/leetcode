// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.


/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 1) return 1;
  if (N === 0) return 0;
  return fib(N-1) + fib(N-2);
};


// fib(3) = fib(2) + fib(1) = (fib(1) + fib(0)) + 1
// fib(4) = fib(3) + fib(2) = (fib(2) + fib(1)) + (fib(1) + fib(0)) = ((fib(1) + fib(0)) + 1) + 1

console.log('fib(2), expected 1', fib(2));
console.log('fib(3), expected 2', fib(3));
console.log('fib(4), expected 3', fib(4));
console.log('fib(5), expected 5', fib(5));
console.log('fib(6), expected 8', fib(6));
