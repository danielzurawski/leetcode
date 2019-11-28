/**
 * Given an int array wood representing length of n pieces of wood and int k.
 * Cut these pieces of wood such that more or equal to k pieces of the same length are cut.
 * 
 * What is the longest len you can get?
 * 
 * Input: wood = [5, 9, 7], k = 3
 * Output: 5
 * Related: Coco Eating Bananas
 */

const isValid = (arr, cutLen, k) => {
  let count = 0;
  for (const wood of arr) {
    if (wood >= cutLen) count += (wood / cutLen);
    else return false;
  }
  return count >= k;
};

const cutWood = (woods, minPieces) => {
  // Cut longest length of wood as possible but also satisfy condition
  // where number of longest wood cuts >= k
  if (!woods || !woods.length || !minPieces) return 0
  let left = 1, right = Math.max(...woods), res = 0;
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (isValid(woods, middle, minPieces)) {
      res = middle;
      left = middle + 1;
    } else {
      right = middle
    }
  }
  return res;
};
console.log('isValid', isValid([5, 9, 7], 3, 3))
console.log('cutWood, should be 5', cutWood([5, 9, 7], 3))