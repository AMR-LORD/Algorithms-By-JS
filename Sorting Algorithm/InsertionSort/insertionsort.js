/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
    for (let i = 1 ;i<nums.length;i++){
        let temp = nums[i];
        let j = i-1 ;
            while(j >= 0 && nums[j] > temp){
                    nums[j+1] = nums[j];
                j--;
            }
            nums[j + 1] = temp;

    }
    return nums;
  }
  
  // unit tests
  // do not modify the below code
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const nums2 = [10,9,8,1];

    insertionSort(nums);
    insertionSort(nums2);
    console.log(JSON.stringify(nums) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
    console.log(...nums2);