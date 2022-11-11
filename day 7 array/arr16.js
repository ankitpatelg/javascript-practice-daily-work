/*
q15. Write a JavaScript function to find an array contains a specific element
auther: ankit patel
date: 11/11/2022
*/
function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
