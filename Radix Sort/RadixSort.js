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

const tst = getLongestnumber(9999);
//console.log(tst);
const tstdigit = getDigit(87623,6,getLongestnumber(9999));
//console.log(tstdigit);
// function radixSort(array) {
//     let Longestnumber = getLongestnumbers(array);
//     let bucket = [];
//     let arr = [];
//     for(let i = 0 ; i <= Longestnumber;i++){
//         if(!bucket.includes(getLongestnumber(array[i]))){
//             bucket.push(getLongestnumber(array[i]));
//         }
//     }
//     for(let j=0;j<=9;j++){
//         if(bucket.includes(j)){
//            let arr1 = array.filter(x=>getDigit(x, 0,7)==j);
//             arr.push(arr1);
//         }
//     }
//     return arr;
//     // code goes here
// }
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

// Test case
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // [2, 24, 45, 66, 75, 90, 170, 802]

// let arr = [11,111,22,3,333,542,5312];
// console.log(radixSort(arr));



// unit tests
// do not modify the below code
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
      console.log(ans==[
          1,
        3,
        4,
        11,
        17,
        19,
        20,
        34,
        51,
        62,
        100,
        104,
        415,
        633,
        801,
        854,
        944,
        1200,
        1244,
        3000,
        3001
    ]);
    //   const fill = 99;
    //   const nums1 = new Array(fill)
    //     .fill()
    //     .map(() => Math.floor(Math.random() * 500000));
    //   const ans = radixSort(nums);
    // 99/10 = 9.9 , 9-9.9 = 0.9 
    // // 99 , 0 ,999 --> 9 
    // function getDigit(number , place , Longestnumber){
    //     let digitplace = 0 ;
    //     if(place <getLongestnumber(number)){   
    //         while(place>=0 &&Longestnumber!=0){
    //             number = number/10 // 8762 = 8762.3
    //             digitplace = (number - Math.floor(number))*10 // (876.2 - 8762) --> 0.3 * 10 = 3
    //             number = Math.floor(number); // 8762
    //             place --;
    //             Longestnumber --;
    //         }
    //     }
    //     return Math.ceil(digitplace); 
    // }

    // function getDigit(number, place, Longestnumber) {
    //     let digitplace = 0;
        
    //     if (place < Longestnumber) {  // Ensure 'place' is within range
    //         while (place >= 0 && Longestnumber > 0) {
    //             digitplace = number % 10; // Extract last digit
    //             number = Math.floor(number / 10); // Remove last digit
    //             place--;
    //             Longestnumber--;
    //         }
    //     }
        
    //     return digitplace; // No need for Math.ceil, as digits are whole numbers
    // }
    //   ans==nums.sort();  