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
function quickSort(arr) {
    if (arr.length <= 1) return arr; // شرط الإيقاف (Base Case)

    let pivot = arr[arr.length - 1]; // اختيار المحور (آخر عنصر)
    let left = []; // القيم الأصغر من المحور
    let right = []; // القيم الأكبر من المحور

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// تجربة الكود
let arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); // [1, 1, 2, 3, 6, 8, 10]

// what i should write in the commit msg ? 
// "Quick Sort"
