/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(value){
        this.data[this.length] = value;
        this.length ++; 
    }
    pop(){
        let deleted =  this.data[this.length-1];
        delete this.data[this.length-1];
        this.length --;
        return deleted; 
    }
    get(index){
        return this.data[index];
    }
    delete(index){
        if (index>=this.length){
            return undefined;
        }
        let deleted = this.data[index];
        for(let i = index ; i<this.length-1 ; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length --;
        return deleted;
    }
}
const list = new ArrayList();

console.log("===== Testing push() =====");
list.push(10);
list.push(20);
list.push(30);
console.log(list.data); // { '0': 10, '1': 20, '2': 30 }
console.log(list.length); // 3

console.log("\n===== Testing get() =====");
console.log(list.get(0)); // 10
console.log(list.get(1)); // 20
console.log(list.get(2)); // 30
console.log(list.get(5)); // undefined

console.log("\n===== Testing pop() =====");
console.log(list.pop()); // 30
console.log(list.data); // { '0': 10, '1': 20 }
console.log(list.length); // 2

console.log("\n===== Testing delete() =====");
console.log(list.delete(0)); // 10
console.log(list.data); // { '0': 20 }
console.log(list.length); // 1
console.log(list.delete(5)); // undefined

console.log("\n===== Final State =====");
console.log(list.data); // { '0': 20 }
console.log(list.length); // 1


















// unit tests
// do not modify the below code
