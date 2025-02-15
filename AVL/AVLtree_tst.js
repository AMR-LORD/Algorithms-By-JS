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
    add(value){
        //decide to go left or right 

        //find the correct place to add
    
        //make sure that you updating height 

        this.balance();
    }
    balance(){
        //ask if this node out of balance

        //if not out of balance, do nothing

        //if out of balance
        //if single just call rotate on itself
        //if double call rotate on child then on itself
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

  