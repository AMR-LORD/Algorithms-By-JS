function quickSort(nums) {
    // base case, arrays of length 0 or 1 are sorted already
    if (nums.length <= 1) return nums;
  
    // last number is the pivot
    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];
  
    // sort all smaller numbers than the pivot into left
    // and all bigger numbers into right
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
  
    // call quick sort on left and right
    // concat all into one big array with pivot in the middle
    return [...quickSort(left), pivot, ...quickSort(right)];
    // the below is equivalent
    // return quickSort(left).concat(pivot, quickSort(right))
  }
  
  // unit tests
  // do not modify the below code
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);
  
    console.log(JSON.stringify(answer)==JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));





    /*
How Quick Sort Works
Process :
Choose a pivot element from the array (commonly the last element).
Partition the array into two subarrays:
Elements less than the pivot go into the "left" subarray.
Elements greater than the pivot go into the "right" subarray.
Recursively apply the same process to the left and right subarrays.
Combine the sorted subarrays with the pivot to produce the final sorted array.
*/
// function quickSort(arr) {
//     if (arr.length <= 1) return arr; // شرط الإيقاف (Base Case)

//     let pivot = arr[arr.length - 1]; // اختيار المحور (آخر عنصر)
//     let left = []; // القيم الأصغر من المحور
//     let right = []; // القيم الأكبر من المحور

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // تجربة الكود
// let arr = [3, 6, 8, 10, 1, 2, 1];
// console.log(quickSort(arr)); // [1, 1, 2, 3, 6, 8, 10]







