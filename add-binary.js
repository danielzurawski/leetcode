/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const strA = a.split('');
    const strB = b.split('');
    let strC = [];
    let topRow, bottomRow;
    if (strA.length > strB.length) {
        topRow = strA;
        bottomRow = strB
    } else {
        topRow = strB;
        bottomRow = strA;
    }
    let pointerA = topRow.length - 1;
    let pointerB = bottomRow.length - 1;
    let carry = 0;
    while (pointerA >= 0) {
       let sum = Number(topRow[pointerA]) + Number(bottomRow[pointerB] || 0) + carry;
       carry = 0;
       if (sum > 1) {
         carry++;
       }
       sum = sum % 2; 
       pointerA--;
       pointerB--;
       strC.push(sum);
    }
    if (carry) {
      strC.push(carry);
    }
    return strC.reverse().join('');
};

var addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
// Cases:
// 1) 0 + 0 -> sum = 0
// 2) 1 + 0 -> sum = 1
// 3) 1 + 1 -> sum = 0, carry = 1
// 4) 1 + 1 + carry -> sum = 1, carry 1

// 1010
// 1011
// 10101

//  11
//   1
// 100
