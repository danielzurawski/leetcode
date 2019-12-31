/*
Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else if (l2.val <= l1.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const one = new ListNode(1);
const two = new ListNode(2);
one.next = two;
two.next = new ListNode(4);

const one2 = new ListNode(1);
const three2 = new ListNode(3);
one2.next = three2;
three2.next = new ListNode(4);

console.log('mergeTwoLists(1->2->4, 1->3->4)', JSON.stringify(mergeTwoLists(one, one2)));

// 1->2->4,
// 1->3->4

// node1.next >= node2.next -> node3.next = node2.next

// 1->3->6
// 1->2->3->4->5
// (1 + 1) -> (2 + 3) -> (3 - > 6) -> 4 -> 5

// 1->3->6
// 1->2->3->4->5
// (1 + 1) -> (2 + 3) -> (3 - > 6) -> 4 -> 5
