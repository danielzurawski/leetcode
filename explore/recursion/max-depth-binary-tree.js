/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example: Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
   15   7
   return its depth = 3.

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return maxDepthHelper(root);
};


const fifteen = new TreeNode(15)
const seven = new TreeNode(7)

const nine = new TreeNode(9)
const twenty = new TreeNode(20)
twenty.left = fifteen;
twenty.right = seven;

const three = new TreeNode(3)
three.left = nine;
three.right = twenty;


const maxDepthHelper = (node) => {
  if (!node) return 0
  return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
}

console.log('maxDepth(three)', maxDepth(three));
