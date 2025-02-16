/*

Implement a radix sort in a function called radixSort.

You'll probably need several functions

You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
it ends up being a lot more simple to implement.

*/


function getLongestnumberdigit(array) {
}
function getDigit(number, place) {
    
}
function radixSort(array) {
}

// Test case
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // [2, 24, 45, 66, 75, 90, 170, 802]
const nums = [
    20,
    51,
    3,
    801,
        415,
        62,
        4,
        17,
        19,
        11,
        1,
        100,
        1244,
        104,
        944,
        854,
        34,
        3000,
        3001,
        1200,
        633
      ];
      const ans = radixSort(nums);
      console.log(JSON.stringify(ans) === JSON.stringify([
        1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944, 1200, 1244, 3000, 3001
    ]));
    



