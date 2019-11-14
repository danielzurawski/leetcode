/*
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

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
var toggleForIndex2 = (index, arr) => {
    if (arr[index] === 'off') {
        arr[index] = 'on'
    } else {
        arr[index] = 'off'    
    }
}

var bulbSwitch = function(n) {
    let arr = Array(n).fill('off');
    for (var round = 1; round <= n; round++) {
        for (var i = 1; i <= arr.length; i++) {
            if (round == 1) {
                toggleForIndex2(i-1, arr)
            } 
            else if (round === n) {
                toggleForIndex2(arr.length - 1, arr);
                break;
            } 
            else if (i % round == 0) {
                toggleForIndex2(i-1, arr)
            } 
        }
    }
    
    return arr.filter((el) => el === 'on').length;
};



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