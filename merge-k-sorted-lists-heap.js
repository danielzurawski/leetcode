console.log(`
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
`)

class ListNode {
  constructor(val) {
    this.value = val;
    this.next = undefined;
  }
  insert(node) {
    let lastNode = this;
    while(lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
    return this;
  }
}

class MinHeap /*<T>*/ {
  constructor/*<T>*/(initialHeap) {
    this.data/*: T*/ = initialHeap || [];
  }

  getParentIndex(index) {
    return Math.floor((index + 1 /2) - 1);
  }

  getValue(index) {
    return this.data[index];
  }

  swap(itemIndex, parentIndex) {
    [this.data[itemIndex], this.data[parentIndex]] = [this.data[parentIndex], this.data[itemIndex]]
  }

  heapify() {
    let index = this.data.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.getValue(parentIndex) > this.getValue(index)) {
        this.swap(index, parentIndex)
      }
      index -= 1;
    }
  }

  pop() {
    return this.data.shift();
  }

  insert(item) {
    this.data.push(item);
    this.heapify()
    return this.data;
  }
}

const minHeap = new MinHeap()
minHeap.insert(5)
minHeap.insert(4)
minHeap.insert(3)
console.log('Build minHeap of 5, 4, 3', minHeap);
console.log('-------\n')
console.log('insert 1 into existing heap [5, 6, 7, 8]', 
  (new MinHeap([5, 6, 7, 8]))
    .insert(1)
)

const input = [
  (new ListNode(1)).insert(new ListNode(4)).insert(new ListNode(5)),
  (new ListNode(1)).insert(new ListNode(3)).insert(new ListNode(4)),
  (new ListNode(2)).insert(new ListNode(6))
];

const mergeKSorted = (input) => {
  const minHeap = new MinHeap();
  input.forEach((node) => {
    minHeap.insert(node.value)

    let nextNode = node.next;
    while(nextNode) {
      minHeap.insert(nextNode.value);
      nextNode = nextNode.next
    }
  });
  let node = new ListNode(minHeap.pop())
  while (minHeap.data.length > 0) {
    node.insert(new ListNode(minHeap.pop()))
  }
  return node;
};
console.log('\n------')
console.log('merged list', JSON.stringify(mergeKSorted(input)));
