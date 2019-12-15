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
  head.next = swapPairs(next.next); // swapPairs(3)
  next.next = head; // 2->1

  return next; // 2
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


