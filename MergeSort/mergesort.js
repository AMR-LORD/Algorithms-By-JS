
const mergeSort = (nums) => {
    // base case
    if (nums.length < 2) {
      return nums;
    }
    // you can be more clever about this code but I wanted it to be readable to you
    const length = nums.length; // get the length of the array
    const middle = Math.floor(length / 2); // get the middle item of the array rounded down
    const left = nums.slice(0, middle);// this will give you the left half of the array
    const right = nums.slice(middle); // this will give you the right half of the array
  
    // merge takes two sorted lists and returns one sorted list
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    const results = [];
  
    // go until one list runs outs
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        // shift removes the first element in an array and returns it
        // it's like .pop() for the front
        results.push(left.shift()); // the shift method removes the first item of an array
      } else {
        results.push(right.shift()); // the shift method removes the first item of an array
      }
    }
  
    // either left or right will be empty so you can safely concat both
    return results.concat(left, right); // the concat method is used to merge two or more arrays because if thier is a remaining element in one of the arrays it will be added to the results array
  };
  
  // unit tests
  // do not modify the below code
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const ans = mergeSort(nums);
    console.log(JSON.stringify(ans)==JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  


// what i should write in the commit msg about my changes that i made ? 
// 















// function mergesort(arr,i,j){
//     if(j-i<=1)
//         return arr;
//     let q = Math.floor((i+j)/2);
//     mergesort(arr,i,q);
//     mergesort(arr,q,j) 
//     merge(arr, i, q, j)
// }

// // mergesort([1,2,3]);

// function merge(arr, i, q, j) {
//     let left = arr.slice(i, q);
//     let right = arr.slice(q, j);
//     let k = i;
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] <= right[rightIndex]) {
//             arr[k++] = left[leftIndex++];
//         } else {
//             arr[k++] = right[rightIndex++];
//         }
//     }

//     while (leftIndex < left.length) {
//         arr[k++] = left[leftIndex++];
//     }

//     while (rightIndex < right.length) {
//         arr[k++] = right[rightIndex++];
//     }
// }
// // console.log(...merge([1,3,5,7,9,10],[2,4,6,8,11]));
// let arr = [9,2,1,4,6,7,2];
// mergesort(arr,0,7);
// console.log(...arr);