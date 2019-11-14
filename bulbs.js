/*
There are n bulbs that are initially off. You first turn on all the bulbs. 
Then, you turn off every second bulb. 
On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). 
For the i-th round, you toggle every i bulb. 
For the n-th round, you only toggle the last bulb. 
Find how many bulbs are on after n rounds.

Input: 3
Output: 1 
Explanation: 
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
*/

/**
 * @param {number} n
 * @return {number}
 */
var toggleForIndex = (index, arr) => {
  if (arr[index] === 'off') {
    arr[index] = 'on'
  } else {
    arr[index] = 'off'    
  }
}

var bulbSwitch = function(n) {
  let iterations = 0;
  let arr = Array(n).fill('off');
  for (var round = 1; round <= n; round++) {
    if (round == n) {
      toggleForIndex(arr.length - 1, arr);
      break;
    }
    for (var i = 1; i <= arr.length; i++) {
      if (round == 1) {
          toggleForIndex(i-1, arr)
      } 
      else if (i % round == 0) {
          toggleForIndex(i-1, arr)
      } 
      iterations++;
    }
  }
  
  console.log('iterations', iterations);
  return arr.filter((el) => el === 'on').length;
};

console.log('Input 1, expected 1', bulbSwitch(1) === 1)
console.log('Input 2, expected 1', bulbSwitch(2) === 1)
console.log('Input 4, expected 2', bulbSwitch(4) === 2)
console.log('Input 5, expected 2', bulbSwitch(5) === 2)

// Failing case (too slow)
console.log('Input 9999, expected ?', bulbSwitch(9999))

/*

Initially:
[off]

After first
[on]

Input 1:
Expected 1
.....

Initially:
[off, off]

After first
[on, on]

After second
[on, off]

Input: 2
Expected: 1
....

Initially:
[off, off, off, off]

After first round 
[on, on, on, on]

After second round
[on, off, on, off]

After third round
[on, off, off, off]

After fourth round
[on, off, off, on]

Input 4,
Expected: 2
...

Initially:
[off, off, off, off, off]

After first
[on, on, on, on, on]

After second
[on, off, on, off, on]

After third
[on, off, off, off, on]

After fourth
[on, off, off, on, on]

After fifth
[on, off, off, on, off]

Input: 5,
expected: 2
*/

/* Two's complement */ 
// ['off', 'off', 'off']

// [0, 0, 0]
// [1, 1, 1] -> inverse bits
// [1, 0, 1] -> mask 1st
// [1, 0, 0] -> mask 2nd

// [0, 0, 0, 0]
// [1, 1, 1, 1] -> inverse bits
// [1, 0, 1, 0] -> mask 1st
// [1, 0, 0, 1] -> mask 2nd




// ['on', 'on', 'on']

var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
};

console.log(`\n\nBulb Switch optimised (correct anwswer)
http://mathforum.org/library/drmath/view/54242.html

Math.floor(Math.sqrt(n))

If a number is a perfect square it will have an odd number of factors, 
e.g 4 has factors 1, 2, 4, whereas all other numbers have an even 
number of factors.  If a particular locker is visited an odd number of 
times it will be open at the end of the procedure you describe; 
otherwise it will be closed. So the open lockers are numbered:

 1, 4, 9, 16, 25, 36, ..... 900, 961

The last number is 31^2  so 31 is the number of lockers left open.

To show that square numbers always have an odd number of factors, 
consider a square like 36. This can be put into prime factors as  
2^2 x 3^2. Note that all its prime factors will be raised to EVEN 
powers since it is a perfect square.

Now the factor 2 can be chosen in 3 ways, i.e. not at all, once, 
twice. And factor 3 can also be chosen in 3 ways, i.e. not at all, 
once, or twice.

(If neither is chosen we get the factor 2^0 x 3^0 = 1).

Altogether there will be 3 x 3 = 9 factors of 36.  These are:

  1, 2, 3, 4, 6, 9, 12, 18, 36

Now the important point was made earlier that the prime factors of a 
perfect square are always raised to some even power, so we could have 
 
  a^2 x b^4 x c^2  where a, b, c are primes.

In this example a could be chosen in 3 ways  0 times, once or twice.
                b could be chosen in 5 ways  0 times, 1, 2, 3, 4 times
                c could be chosen in 3 ways  0 times, 1, 2, times

So altogether the complete number will have  3 x 5 x 3 = 45 factors.

For any number that is not a perfect square there will ALWAYS be an 
even number of factors

 e.g.   a^3 x b^2 x c  will have   4 x 3 x 2 factors = 24 factors

If it is not a perfect square at least one of its prime factors will 
be raised to an ODD power, and that means the factor can be chosen in 
an EVEN number of ways, ensuring that overall there will be an even 
number of factors.

The general rule for the number of factors is to increase the powers 
of the factors by 1 and multiply these together.

So  a^n x b^m x c^p  will have (n+1)(m+1)(p+1) factors.

 2^3 x 5^4 x 7^2  will have  4 x 5 x 3 = 60 factors   

-Doctor Anthony,  The Math Forum
 Check out our web site!  http://mathforum.org/dr.math/   

`)
console.log('Input 1, expected 1', bulbSwitch(1) === 1)
console.log('Input 2, expected 1', bulbSwitch(2) === 1)
console.log('Input 4, expected 2', bulbSwitch(4) === 2)
console.log('Input 5, expected 2', bulbSwitch(5) === 2)
console.log('Input 9999, expected ?', bulbSwitch(9999))