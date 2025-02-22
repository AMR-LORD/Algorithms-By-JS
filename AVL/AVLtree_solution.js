/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Tree {
    constructor() {
      this.root = null;
    }
    add(value) {
      if (!this.root) {
        this.root = new Node(value);
      } else {
        this.root.add(value);
      }
    }
    toJSON() {
      return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
      return this.root.serialize();
    }
  }
  
  class Node {
    constructor(value = null, left = null, right = null) {
      this.left = left;
      this.right = right;
      this.value = value;
      this.height = 1;
    }
    add(value) {
      if (value < this.value) {
        // go left
  
        if (this.left) {
          this.left.add(value);
        } else {
          this.left = new Node(value);
        }
        if (!this.right || this.right.height < this.left.height) {
          this.height = this.left.height + 1;
        }
      } else {
        // go right
  
        if (this.right) {
          this.right.add(value);
        } else {
          this.right = new Node(value);
        }
        if (!this.left || this.right.height > this.left.height) {
          this.height = this.right.height + 1;
        }
      }
      this.balance();
    }
    balance() {
      const rightHeight = this.right ? this.right.height : 0;
      const leftHeight = this.left ? this.left.height : 0;
  
      if (leftHeight > rightHeight + 1) {
        const leftRightHeight = this.left.right ? this.left.right.height : 0;
        const leftLeftHeight = this.left.left ? this.left.left.height : 0;
  
        if (leftRightHeight > leftLeftHeight) {
          this.left.rotateRR();
        }
  
        this.rotateLL();
      } else if (rightHeight > leftHeight + 1) {
        const rightRightHeight = this.right.right ? this.right.right.height : 0;
        const rightLeftHeight = this.right.left ? this.right.left.height : 0;
  
        if (rightLeftHeight > rightRightHeight) {
          this.right.rotateLL();
        }
  
        this.rotateRR();
      }
    }
    // rotateRR work on the left side of the tree
    // how thr rotation works ? --> https://www.youtube.com/watch?v=rbg7Qf8GkQ4
    // rotateLL work on the right side of the tree
    rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore; //??
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
  
    updateInNewLocation() {
      if (!this.right && !this.left) {
        this.height = 1;
      } else if (
        !this.right ||
        (this.left && this.right.height < this.left.height)
      ) {
        this.height = this.left.height + 1;
      } else {
        //if (!this.left || this.right.height > this.left.height)
        this.height = this.right.height + 1;
      }
    }
    serialize() {
      const ans = { value: this.value };
      ans.left = this.left === null ? null : this.left.serialize();
      ans.right = this.right === null ? null : this.right.serialize();
      ans.height = this.height;
      return ans;
    }
  }
  
///////////////////////////////////////////////////////////////////








const tree = new Tree();
tree.add(10);
tree.add(20);
tree.add(30);
tree.add(5);
tree.add(15);

console.log(JSON.stringify(tree.toObject(), null, 2));