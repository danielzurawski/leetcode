// var minWindow = function(s, t) {
//     const strArr = s.split('');
//     let targetCharsCount = 0;
//     let lookup;
//     const buildLookup = () => {
//         targetCharsCount = 0;
//        return t.split('').reduce((acc, c) => { 
//             if (!acc[c]) acc[c] = 0;
//             acc[c]++;
//             targetCharsCount++;
//             return acc; 
//         }, {});
//     }
  
//     let strCount;
//     let foundCharsCount = 0;
//     let smallestrStrSoFar = Infinity;
//     let smallestStr = '';
//     for (let i = 0; i < strArr.length; i++) {
//         strCount = 0; 
//         foundCharsCount = 0;
//         lookup = buildLookup();
//         strCount++;
//         if (lookup[strArr[i]]) { 
//           lookup[strArr[i]]--;
//           if (targetCharsCount === 1) {
//               return strArr[i];
//           }
//           foundCharsCount++;
          
//           for(let j = i+1; j < strArr.length; j++) {
//               strCount++;
//             //   console.log('lookup', strArr[j], 'result', lookup[strArr[j]])
//               if (lookup[strArr[j]]) {
//                 lookup[strArr[j]]--;
//                   foundCharsCount++;
//                 //   console.log('foindCharsCount', foundCharsCount, 'targetCharsCount');
//                   if (foundCharsCount == targetCharsCount) { 
//                     //   console.log('foundCharsCount', foundCharsCount, 'targetCharsCount', targetCharsCount)
//                       if (strCount < smallestrStrSoFar) {
//                           smallestStr = (strArr.slice(i, j+1)).join('');
//                       }
//                       smallestrStrSoFar = Math.min(strCount, smallestrStrSoFar)
//                       break;
//                   }
//               }
//           }    
//         }
//     }
//     return smallestStr;
// };

var minWindow = function(s, t) { 
  const strArr = s.split('');    // [b, b, a]
  const targetArr = t.split(''); // [a, b]
  const lookup = targetArr.reduce((acc, c) => { 
    if (!acc[c]) acc[c] = 0;
    acc[c]++;
    return acc; 
  }, {});
  let targetCharsCount = targetArr.length;
  let head = -1;
  let window = Infinity;
  let left = 0, right = 0;
  while (right < strArr.length) {
    let char = strArr[right];
    if (lookup[char] > 0) {
      targetCharsCount--;
    }
    right++;
    lookup[char]--;
    console.log('char', char, targetCharsCount);
    while (targetCharsCount == 0) {
      // console.log('inside 2nd loop, left', left, 'char at left', strArr[left]);
      if (window > right - left) {
        // console.log('window', window, 'right,', right, 'left', left);
        head = left;
        window = right - left
      }
      
      if (lookup[strArr[left]] == 0) {
        targetCharsCount++
      }
      lookup[strArr[left]]++
      left++
    }
  }
  return head == -1 ? '' : s.slice(head, head + window);
}

// console.log('expect BANC', minWindow('ADOBECODEBANC', 'ABC'))


// console.log('expect ba' , minWindow('bba', 'ab'))


// class Solution {
//   public String minWindow(String s, String t) {
//      int[] count = new int[128];
//       for (char a : t.toCharArray()) {
//         count[a]++;
//       }

//       int counter = t.length(), left = 0, right = 0;
//       int head = -1, window = Integer.MAX_VALUE;
//       while (right < s.length()) {
//         if (count[s.charAt(right++)]-- > 0) counter--;

//         while (counter == 0) {
//           if (window > right - left) {
//             head = left;
//             window = right - left;
//           }

//           if (count[s.charAt(left++)]++ == 0) counter++;
//         }
//       }

//       return head == -1 ? "" : s.substring(head, head+window);
//   }
// }


// S = "ADOBECODEBANC", T = "ABC"

// S = ADOBECODEBANC
//     |     | = 6
//        |       | = 8
//          |     | = 6
//              | . | = 4 <- smallest BANC
// T = ABC
console.log('expect BANC', minWindow('ADOBECODEBANC', 'ABC'))
console.log('expect ""', minWindow('ADOBECODEBANC', 'XYZ'))
console.log('expect AD', minWindow('ADOBECODEBANC', 'AD'))
console.log('expect A', minWindow('ADOBECODEBANC', 'A'))
console.log('expect ""', minWindow('AAAAAAAAAAAA', 'B'))
console.log('expect B', minWindow('AAAAAAAAAAAB', 'B'))
console.log('expect B', minWindow('AAAAAAAAAAABA', 'B'))
console.log('expect ab',minWindow('bba', 'ab'))
console.log('expect aa', minWindow('aa', 'aa'))
console.log('expect baca', minWindow('acbbaca', 'aba'))



// TIME LIMIT EXCEEDED


