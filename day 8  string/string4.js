/*
q4. Write a JavaScript function to extract a specified number of characters from a string
auther: ankit;
date: 15/11/2022;
*/
truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));
