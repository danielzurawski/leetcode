/* Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

Note:

You may assume the interval's end point is always bigger than its start point.
You may assume none of these intervals have the same start point.


Input: [ [3,4], [2,3], [1,2] ]

Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.
*/

class Interval {
  constructor(intervalArr) {
    this.start = intervalArr[0];
    this.end = intervalArr[1];
  }
}

const binarySearchIntervals = (intervals, target, start, end) => {
  if (start >= end) {
    if (intervals[start].start >= target) {
      return intervals[start]
    }
    return null;
  }

  const mid = Math.floor((start + end) / 2);

  if (intervals[mid].start < target) {
    return binarySearchIntervals(intervals, target, mid + 1, end)
  } else {
    return binarySearchIntervals(intervals, target, start, mid)
  }
};

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const origIntervals = new WeakMap();
  for (let i  = 0; i < intervals.length; i++) {
    origIntervals.set(intervals[i], i);
  }
  const intervalsSorted = intervals.sort((a, b) => a.start - b.start);

  const res = [];

  for (let interval of intervalsSorted) {
    const foundInterval = binarySearchIntervals(intervalsSorted, interval.end, 0, intervals.length - 1);
    res[origIntervals.get(interval)] = foundInterval === null ? -1 : origIntervals.get(foundInterval);
  }

  return res;
};

console.log('should be -1, 0, 1', findRightInterval([new Interval([3,4]), new Interval([2,3]), new Interval([1,2])]))
