/*

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Given 1->2->3->4, you should return the list as 2->1->4->3.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}f
 */
var swapPairs = (head) => {
  if (!head || !head.next) return head;

  let next = head.next; // next => 2
  head.next = swapPairs(next.next); // 1-> swapPairs(3)
  next.next = head; // 2->1

  return next; // 2
};


/*
1->2  =>  2->1->null
return new head

1->2->3->4  =>  2->1->4->3
*/
var swapPairs = (head) => {
  if (!head || !head.next) return head;
  let dummy = new ListNode(-1)
  dummy.next = head;

  let prevNode = dummy; // -1 -> 1 -> 2 -> 3 -> 4

  while (head && head.next) { // 2, 4
    let next = head.next; // 2, 4

    prevNode.next = next; // -1 -> 2 , 1 -> 4
    head.next = next.next; // 1 -> 3, 3 -> null
    next.next = head; // 2 -> 1, 4 -> 3

    prevNode = head; // prevNode = 1;
    head = head.next; // 1 = 3
  }

  return dummy.next;
};

var one = new ListNode(1);
one.next = new ListNode(2);

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
three.next = four;
two.next = three;
one.next = two;

console.log('swapPairs 1->2->3->4, should be 2->1->4->3', swapPairs(one));


