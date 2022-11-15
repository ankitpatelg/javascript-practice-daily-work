/* q2. Write a JavaScript function to check whether a string is blank or not
auther: ankit patel ;
date: 15/11/2022;
*/is_Blank =  function(input) {
    if (input.length === 0)
    return true;
    else 
    return false;
  }
console.log(is_Blank(''));
console.log(is_Blank('abc'));
