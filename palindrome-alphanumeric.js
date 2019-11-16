/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const strArr = s.split('');
    if (!strArr.length) return true;
    
    let i = 0, j = strArr.length - 1;

    let charA;
    let charB;
    while(i < j) {
        charA = (strArr[i]).toLowerCase();
        charB = (strArr[j]).toLowerCase();
        if (!isAlphaNumeric(charA)) {
            i++;
        } else if (!isAlphaNumeric(charB)) {
            j--;
        } else {
            if (charA !== charB) {
                return false
            }
        
            i++;
            j--;
        }
    }
    return true;
};

const isAlphaNumeric = (c)  => {
    const code = c.charCodeAt(0)
    return !(!(code > 47 && code < 58) && !(code > 96 && code < 123)) 
};

console.log(isPalindrome('00P'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
// abba -> length = 4, half point 2
// ab -> i = 1, i <= halfPoint - 1 
// ba -> j = 2 so j > halfpoint -1