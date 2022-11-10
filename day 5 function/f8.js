/*
q8. Write a JavaScript function that returns array elements larger than a number
auther: ankit patel
date: 08/11/2022
*/
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);
