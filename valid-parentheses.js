"use strict";
const closing = {
    '}': '{',
    ']': '[',
    ')': '('
};
/**
* @param {string} s
* @return {boolean}
*/
const isValid = (s) => {
    const strArr = s.split('');
    const stack = [];
    for (const bracket of strArr) {
        const opening = closing[bracket];
        if (opening) {
            if (!stack.length)
                return false;
            if (!(stack.pop() === opening))
                return false;
        }
        else {
            stack.push(bracket);
        }
    }
    return !stack.length;
};
console.log('isValid("{[]}"', isValid("{[]}"));
console.log('isValid("([)]"', isValid("([)]"));
