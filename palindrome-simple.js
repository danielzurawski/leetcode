/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var strArr = (x+'').split('');
    if (strArr.length == 1) {
        return true;
    }
    for(var i = 0, j = strArr.length-1; i < j; i++, j--) {
        if (strArr[i] != strArr[j]) {
            return false;
        }
    }
    return true;
  };

  console.log(isPalindrome(121));