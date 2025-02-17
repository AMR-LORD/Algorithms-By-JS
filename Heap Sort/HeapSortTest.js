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
Ensure the subtree rooted at index satisfies the Max Heap property
 by comparing with its children and swapping if needed.

3. createMaxHeap
Build a Max Heap by applying heapify to all parent nodes starting from the last one.

4. heapSort
Sort the array by:
Building a Max Heap.
Repeatedly swapping the root (largest) with the last element and reducing heap size.
Testing
Use the provided test case to verify your solution works correctly.
*/

function heapSort(array) {
    // code
    return array;
}
  
  const createMaxHeap = (array) => {

  };
  
  const heapify = (array, index, heapSize) => {
};

  function Swap(array , i, j){
  }
  
  // unit tests
  // do not modify the below code
    const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
    heapSort(nums);
    const test = JSON.stringify(nums)==JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(test? 'Pass' : 'Fail');