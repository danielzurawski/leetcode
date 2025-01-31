/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
*/

// 1,2,3,4,5
// G,G,G,B,B
//     | |   -> return 4

// 1,2,3,4,5,6,7,8,10
// G,G,G,G,G,G,G,B,B
//         |        |
//             |    |
//                | | -> return 9
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */


// 0,1,2
// G,B,B
// 


// 0,1,2,3,4
// G,B,B,B,B
// 

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (!isBadVersion(mid) && isBadVersion(mid + 1)){
        return mid + 1;
      } else if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid
      }
    }
    if (isBadVersion(left)) return left;
  };
};
