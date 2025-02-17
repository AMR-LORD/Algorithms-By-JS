/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place 
  (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
---------------------------------------------------------

                        Order of Functions to Implement:
swapPlace
heapify
createMaxHeap
heapSort

---------------------------------------------------------
                        **Hints for Each Function:** 

1. swapPlace
Swap two elements in the array using their indices.

2. heapify
Ensure the subtree rooted at index satisfies the Max Heap property by comparing with its children and swapping if needed.

3. createMaxHeap
Build a Max Heap by applying heapify to all parent nodes starting from the last one.

4. heapSort
Sort the array by:
Building a Max Heap.
Repeatedly swapping the root (largest) with the last element and reducing heap size.
Testing
Use the provided test case to verify your solution works correctly.
*/
/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
  
  If you want to visualize your algorithm, call snapshot(<your array>) at the end of your heapify. The comparisons number will probably
  be a bit skewed but it's meant to be an approximation.
  
  
*/

const heapSort = (array) => {
    array = createMaxHeap(array);
    for (let i = array.length - 1; i > 0; i--) {
      swapPlace(0, i, array);
      heapify(array, 0, i);
    }
    return array;
  };
  
  const swapPlace = (index1, index2, array) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  };
  
  const createMaxHeap = (array) => {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      heapify(array, i, array.length);
    }
    return array;
  };
  
  //iterative heapify
  /*
  const iterativeheapify = (array, index, heapSize) => {
    while (true) {
        let largest = index;
        let leftchild = 2 * index + 1;
        let rightchild = 2 * index + 2;

        // Check if left child exists and is greater than root
        if (leftchild < heapSize && array[leftchild] > array[largest]) {
            largest = leftchild;
        }

        // Check if right child exists and is greater than largest so far
        if (rightchild < heapSize && array[rightchild] > array[largest]) {
            largest = rightchild;
        }

        // If the largest element is not the parent, swap and continue down
        if (largest !== index) {
            swapPlace(index, largest, array);
            index = largest;  // Move down to the swapped child
        } else {
            break;  // Stop when heap property is satisfied
        }
    }
};
*/
  const heapify = (array, index, heapSize) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
  
    let largestValueIndex = index;
  
    if (heapSize > left && array[largestValueIndex] < array[left]) {
      largestValueIndex = left;
    }
  
    if (heapSize > right && array[largestValueIndex] < array[right]) {
      largestValueIndex = right;
    }
  
    if (largestValueIndex !== index) {
      swapPlace(index, largestValueIndex, array);
      heapify(array, largestValueIndex, heapSize);
    }
  };
  
  
  // unit tests
  // do not modify the below code
    const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
    heapSort(nums);
    const test = JSON.stringify(nums)==JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(test? 'Pass' : 'Fail'); // passing
  