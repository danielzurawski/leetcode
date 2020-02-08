/*  We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
    (Here, the distance between two points on a plane is the Euclidean distance.)
    You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

    Example 1:

    Input: points = [[1,3],[-2,2]], K = 1
    Output: [[-2,2]]

    Explanation:
        The distance between (1, 3) and the origin is sqrt(10).
        The distance between (-2, 2) and the origin is sqrt(8).
        Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
        We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

*/

class MinHeap<T extends { value: number }> {
  private heap: T[];

  constructor() {
    this.heap = [];
  }

  swap(itemIndex: number, parentIndex: number): void {
    [this.heap[itemIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[itemIndex]];
  }

  parentIndex(i: number): number {
    return Math.floor(i + 1 / 2) - 1;
  }

  parent(i: number): T {
    return this.heap[this.parentIndex(i)];
  }

  value(node: T): number {
    return node.value;
  }

  heapify(): void {
    let i = this.heap.length - 1;
    while (i > 0 && this.value(this.heap[i]) < this.value(this.parent(i))) {
      this.swap(i, this.parentIndex(i));
      i = this.parentIndex(i);
    }
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapify();
  }

  getAtIndex(index: number): T {
    return this.heap[index];
  }
}

const euclidean = (q1: number, p1: number, q2: number, p2: number): number => {
  return Math.sqrt(Math.pow(q1-p1, 2) + Math.pow(q2 - p2, 2));
};

type Point = {
  x: number;
  y: number;
  value: number;
}

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function(points: number[][], K: number): number[][] {
  const origin = [0, 0];
  const minHeap = new MinHeap<Point>();
  points.forEach((point) => {
    const y = point[0];
    const x = point[1];
    minHeap.insert({ value: euclidean(x, origin[1], y, origin[0]), x, y })
  });
  const nearestPoints = [];
  for (let i = 0; i < K; i++) {
    nearestPoints.push([minHeap.getAtIndex(i).y, minHeap.getAtIndex(i).x])
  }
  return nearestPoints;
};

/* Euclidean:
    sqrt((q1-p1)^2 + (q2-p2)^2)
*/

// 1 = [1, 3];
// 2 = [-2, 2]

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]

// const plane = [
//           [0, 0, 0, 1]
// /*-> 0*/  [0, 0, 0, 0],
//           [0, 0, 0, 0],
//           [0, 0, 1, 0]
// ];

// q1 = 0,
// q2 = 0;

// p1 = 1
// p2 = 2
