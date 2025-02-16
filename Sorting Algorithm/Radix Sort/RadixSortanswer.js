/*

Implement a radix sort in a function called radixSort.

You'll probably need several functions

You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
it ends up being a lot more simple to implement.

*/


function getLongestnumber(num){
    let count = 0;
    while(num!=0){
        num = Math.floor(num/10);
        count ++;
    }
    return count;
}
function getDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}
function getLongestnumbers(nums) {
    if (nums.length === 0) return 0; // Handle empty array case

    let maxNum = Math.max(...nums); // Find the largest number
    return getLongestnumber(maxNum); // Get the number of digits in it
}

function radixSort(array) {
    let maxDigitCount = getLongestnumbers(array);
    for(let i = 0 ; i<maxDigitCount;i++){
        let bucket = Array.from({length:10},()=>[]) 
        for(let j = 0 ; j<array.length;j++){
                bucket[getDigit(array[j],i)].push(array[j]);
        }
        array = bucket.flat();
    }
    return array;
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
    


    // another solution 

/*
function radixSort(array) {
    let maxDigitCount = getLongestnumbers(array);

    for (let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let num of array) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        array = [].concat(...buckets); // Flatten the buckets into the array
    }

    return array;
}

*/

    /*

function radixSort(array) {
  const longestNumber = findLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

*/

