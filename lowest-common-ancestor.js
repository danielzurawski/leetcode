/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return undefined;
    if (root.val == p.val || root.val == q.val) {
        console.log('returning root', root.val)
        return root;
    }
    console.log('root', root.val)
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    left && right && console.log('left and right, returning root.val', root.val)
    left && console.log('left returning root.val', root.val)
    right && console.log('right returning root.val', root.val)
    if (left && right) return root; 
    else if (left) return left;
    else return right;
}

function TreeNode(val) {    
    this.val = val;
    this.left = null;
    this.right = null;
}

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3


var root = new TreeNode(3)
var five = new TreeNode(5)
var one = new TreeNode(1)

root.left = five;
root.right = one;
// console.log(lowestCommonAncestor(root, five, one));

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

var root = new TreeNode(3)
var five = new TreeNode(5)
var one = new TreeNode(1)
var six = new TreeNode(6)
var two = new TreeNode(2)
var zero = new TreeNode(0)
var eight = new TreeNode(8)
var seven = new TreeNode(7)
var four = new TreeNode(4)

two.left = seven;
two.right = four;
one.left = zero;
one.right = eight;
five.left = six;
five.right = two;
root.left = five;
root.right = one;

// lowestCommonAncestor(root, five, four);
lowestCommonAncestor(root, six, zero);