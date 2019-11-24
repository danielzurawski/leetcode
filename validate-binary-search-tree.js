class Node {
    constructor(val) {
        this.val = val;
        this.left /*: Node*/ = undefined;
        this.right /*: Node*/ = undefined;
    }
}

var isValidBST = function(root) {
    const recurse = (root, ceil, floor) => {
        debugger;
        if (!root) return true;
        
        if (!(ceil > root.val && root.val > floor)) {
            return false;
        }

        let leftValid = recurse(root.left, root.val, floor);
        let rightValid = recurse(root.right, ceil, root.val);

        return leftValid && rightValid;
    };
    if (!root) return true;
    return recurse(root, Infinity, -Infinity)    
};


const three = new Node(3)
const one = new Node(1)
const five = new Node(5)
const zero = new Node(0)
const two = new Node(2)
const four = new Node(4)
const six = new Node(6)

three.left = one;
three.right = five;

one.left = zero;
one.right = two;

five.left = four;
five.right = six;
console.log('isValidBST', isValidBST(three));