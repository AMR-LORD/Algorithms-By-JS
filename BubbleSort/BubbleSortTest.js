/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
    let swapped = false;
    let n = nums.length;
    do {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (nums[i] > nums[i + 1]) {
                const temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);    
}
  
  // unit tests
  // do not modify the below code

    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const nums2 = [2,3,5,1];
    bubbleSort(nums);
    bubbleSort(nums2);
    console.log(...nums2)
    console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
