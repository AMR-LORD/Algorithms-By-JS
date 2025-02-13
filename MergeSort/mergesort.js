

function mergesort(arr,i,j){
    if(j-i<=1)
        return arr;
    let q = Math.floor((i+j)/2);
    mergesort(arr,i,q);
    mergesort(arr,q,j) 
    merge(arr, i, q, j)
}

// mergesort([1,2,3]);

function merge(arr, i, q, j) {
    let left = arr.slice(i, q);
    let right = arr.slice(q, j);
    let k = i;
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr[k++] = left[leftIndex++];
        } else {
            arr[k++] = right[rightIndex++];
        }
    }

    while (leftIndex < left.length) {
        arr[k++] = left[leftIndex++];
    }

    while (rightIndex < right.length) {
        arr[k++] = right[rightIndex++];
    }
}
// console.log(...merge([1,3,5,7,9,10],[2,4,6,8,11]));
let arr = [9,2,1,4,6,7,2];
mergesort(arr,0,7);
console.log(...arr);