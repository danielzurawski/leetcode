console.log(`
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
\n--------\n`);

const matrix =[
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

const sumRegion = (y, x, y2, x2) => {
  let sum = 0;
  for(var i = y; i <= y2; i++) {
    for(var j = x; j <= x2; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};
console.log('sumRegion(2, 1, 4, 3) === 8', sumRegion(2, 1, 4, 3) === 8)
console.log('sumRegion(1, 1, 2, 2) === 11', sumRegion(1, 1, 2, 2) === 11)
console.log('sumRegion(1, 2, 2, 4) === 11', sumRegion(1, 2, 2, 4) === 12)