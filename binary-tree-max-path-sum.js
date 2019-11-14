console.log(`

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Input: [-10,9,20,null,null,15,7]

   -10
   / \\
  9  20
    /  \\
   15   7

Output: 42
`)

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = undefined;
    this.right = undefined;
  }
}


const twenty = new TreeNode(20)
twenty.left = new TreeNode(15)
twenty.right = new TreeNode(7)

const root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = twenty;

console.log('root', root);


const maxPathSum = (root) => {
  let maxSum = -Infinity;

  const maxPath = (root) => {
    if (!root) return 0;

    const leftMaxPath = Math.max(maxPath(root.left), 0);
    const rightMaxPath = Math.max(maxPath(root.right), 0);

    // console.log('leftMaxPath', leftMaxPath, 'rightMaxPath', rightMaxPath, 'root.value', root.value)
    const priceNewPath = root.value + leftMaxPath + rightMaxPath;
    // console.log('priceNewPath', priceNewPath);
    maxSum = Math.max(priceNewPath, maxSum)
    // console.log('maxSum', maxSum)

    return root.value + Math.max(leftMaxPath, rightMaxPath);
  }

  maxPath(root);

  return maxSum;
};

console.log(maxPathSum(root));

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(3)
console.log(maxPathSum(root2));

const root3 = new TreeNode(-3)
console.log(maxPathSum(root3));

const root4 = new TreeNode(2)
root4.left = new TreeNode(-1);
console.log(maxPathSum(root4));
