
// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]

// Incomprehensible solution from LeetCode

var removeInvalidRecursive = (...args) => {
    debugger;
    let minimumRemoved = Infinity;
    let validExpressions = new Set();

    const recurse = (strArr, index, leftCount, rightCount, expression, removedCount) => {
        debugger;
        if (index == strArr.length) {
            if (leftCount == rightCount) {
                if (removedCount <= minimumRemoved) {
                    if (removedCount < minimumRemoved) {
                        validExpressions.clear();
                        minimumRemoved = removedCount;
                    }
                    validExpressions.add(expression.join(''));
                }
            }
        } else {
            const char = strArr[index];
            const length = expression.length;

            // regular character
            if (char !== '(' && char !== ')') {
                expression.push(char)
                recurse(strArr, index + 1, leftCount, rightCount, expression, removedCount);
                expression.splice(length, 1);
            } else {
                // Recursion where we delete the current character and move forward
                recurse(strArr, index + 1, leftCount, rightCount, expression, removedCount + 1);
                expression.push(char)

                if (char === '(') {
                    recurse(strArr, index + 1, leftCount + 1, rightCount, expression, removedCount);
                } else if (rightCount < leftCount) {
                    recurse(strArr, index + 1, leftCount, rightCount + 1, expression, removedCount);
                }
                expression.splice(length, 1);
            }
        }
    };
    recurse.apply(undefined, args);
    return validExpressions;
}

var removeInvalidParentheses = function(s) {
    console.log('validExpressions', removeInvalidRecursive(s.split(''), 0, 0, 0, [], 0));
};