/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let one = new ListNode(1)
let two = new ListNode(2);
let three = new ListNode(3);
// let four = new ListNode(4);
// three.next = four;
two.next = three;
one.next = two;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  return p;
};

//       1->2->3->null
// null<-1<-2<-3
const reverseListIter = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }
  return prev;
}

console.log('reverseList 1->2', reverseList(one));


let one1 = new ListNode(1)
let two1 = new ListNode(2);
let three1 = new ListNode(3);
// let four = new ListNode(4);
// three.next = four;
two1.next = three1;
one1.next = two1;
console.log('reverseList 1->2->3 iter', reverseListIter(one1));
