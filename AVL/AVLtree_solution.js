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
      this.Root = null;
    }
    add(value){
        //add a new node to the tree
        let node = new Node(value);
        if(this.Root == null){
            this.Root = node;
        } else {
            this.Root.add(value);
        }
    }
    toObject(){
        return this.Root;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.hieght = 1;
    }

    add(value) {
        if (value === this.value) return; // منع التكرار
        
        if (value < this.value) {
            if (this.left == null) {
                this.left = new Node(value);
            } else {
                this.left.add(value);
            }
        } else {
            if (this.right == null) {
                this.right = new Node(value);
            } else {
                this.right.add(value);
            }
        }
    
        // تحديث الارتفاع بناءً على الأطوال الفعلية
        this.height = 1 + Math.max(
            this.left ? this.left.height : 0,
            this.right ? this.right.height : 0
        );
    
        this.balance(); // هنضيف التوازن لاحقًا
    }
    balance() {
        let balanceFactor = this.getHeight(this.left) - this.getHeight(this.right);
    
        // حالة الدوران لليسار (LL أو LR)
        if (balanceFactor > 1) {
            if (this.getHeight(this.left.left) >= this.getHeight(this.left.right)) {
                this.rotateLL(); // LL Case
            } else {
                this.left.rotateRR(); // تحويل LR إلى LL
                this.rotateLL();
            }
        }
    
        // حالة الدوران لليمين (RR أو RL)
        if (balanceFactor < -1) {
            if (this.getHeight(this.right.right) >= this.getHeight(this.right.left)) {
                this.rotateRR(); // RR Case
            } else {
                this.right.rotateLL(); // تحويل RL إلى RR
                this.rotateRR();
            }
        }
    }
    
    // دالة لحساب الارتفاع لأي عقدة
    getHeight(node) {
        return node ? node.height : 0;
    }
        rotateRR(){
        //rotate right
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL(){
        //rotate left
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation(){
        //update height 
    }
}

  