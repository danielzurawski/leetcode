const assert = require('assert');
console.log(`
    5
   / \\
  3   6
 / \\   \\
2   4   7`)
/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7
*/

class Node {
  constructor(val) {
    this.value = val;
    this.left /*: Node*/ = undefined;
    this.right /*: Node*/ = undefined;
  }
}

/* In-order traversal of:
    5
   / \
  3   6
 / \   \
2   4   7
*/
const five = new Node(5)
const three = new Node(3)
const six = new Node(6)
const two = new Node(2)
const four = new Node(4)
const seven = new Node(7)

three.left = two;
three.right = four;
six.right = seven;
five.left = three;
five.right = six;

function inorder(node) {
  if (node) {
    return [].concat(inorder(node.left), [node.value], inorder(node.right));
  }
  return [];
}
console.log('inorder traversal of the input tree\n', inorder(five));

function successor(node) {
  let successor = node;
  if (successor.right) successor = successor.right
  while (successor.left) {
    successor = successor.left;
  }
  return successor;
}
console.log('successor of val 3', successor(three))
console.log('successor of val 4', successor(four))

function predecessor(node) {
  let predecessor = node;
  if (predecessor.left) predecessor = predecessor.left;
  while (predecessor.right) {
    predecessor = predecessor.right
  }
  return predecessor;
}
console.log('predecessor of val 5', predecessor(five))

const isLeaf = (root) => {
  return !(root.left && root.right);
}

const deleteValueFromBST = (root, val) => {
  if (!root) return undefined;
  if (val < root.value) {
    root.left = deleteValueFromBST(root.left, val);
  } else if (val > root.value) {
    root.right = deleteValueFromBST(root.left, val);
  } else { // (root.value == val)
    if (isLeaf(root)) {
      root = undefined;
    } else if (root.right) {
      let successorNode = successor(root);
      root.value = successorNode.value;
      root.right = deleteValueFromBST(root.right, root.value);
    } else { // (root.left)
      let predecessorNode = predecessor(root);
      root.value = predecessorNode.value;
      root.left = deleteValueFromBST(root.left, root.value);
    }
  }

  return root;
};
console.log('\n ------- \n')
console.log('after removing val 3 from tree', deleteValueFromBST(five, 3))
assert(inorder(deleteValueFromBST(five, 3)).join('') === [2, 4, 5, 6, 7].join(''))
