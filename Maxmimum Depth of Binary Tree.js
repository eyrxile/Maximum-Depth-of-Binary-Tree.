function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
    if(!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};

//Example usage:
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(maxDepth(root1));

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);

console.log(maxDepth(root2));