/*
q20. Write a JavaScript function to create a specified number of elements and pre-filled string value array.
auther:ankit patel
date:11/11/2022
*/
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));
