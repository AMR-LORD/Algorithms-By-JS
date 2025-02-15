function binarySearch(id, array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid].id === id) {
            return [array[mid]];
        }

        if (id > array[mid].id) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ["Item not found"];
}




const lookingFor = { id: 23, name: "Brian" };
let testsearch =
binarySearch(3, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      { id: 5, name: "John" },
      { id: 6, name: "Burke" },
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      lookingFor,
      { id: 24, name: "Ben" }
    ]);
    console.log(testsearch[0]);
  
    
    // function binarySearch(id,array){
    //     let arr = [].concat(array); 
    //     let item = [];
    //     let found = false;
    //     while(!found){
    //         let middle = arr[Math.floor((arr.length)/2)].id;
    //         if(arr.length==2){
    //             if(id==arr[0].id){
    //                 item.push(arr[0]);
    //                 found = true;
    //             }
    //             else if(id==arr[1].id){
    //                 item.push(arr[1]);
    //                 found = true;
    //             }
    //             else{
    //                 item.push("Item not found");
    //                 found = true;
    //             }
    //         }
    //         else if(arr.length==1){
    //             if(id==arr[0].id){
    //                 item.push(arr[0]);
    //                 found = true;
    //             }
    //             else{
    //                 item.push("Item not found");
    //                 found = true;
    //             }
    //         }
    //         else{
    //             if(id > middle){
    //                 arr = arr.slice(Math.floor(arr.length/2) + 1) ;
    //             }
    //             else{
    //                 arr = arr.slice(0,Math.floor((arr.length)/2));;
    //             }
    //         }
    //     }
    //     return item
    // }