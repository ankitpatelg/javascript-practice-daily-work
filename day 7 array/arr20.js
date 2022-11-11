/*
q19. Write a JavaScript function to create a specified number of elements and pre-filled numeric value array
auther: ankit patel
date: 11/11/2022
*/
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
