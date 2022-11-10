/*
q12. Write a JavaScript function to get the function name.
auther: ankit patel
date: 08/11/2022
*/
function abc() {
    console.log( arguments.callee.name );
}

abc();
