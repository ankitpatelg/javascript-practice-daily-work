/*
q11. Write a JavaScript program to pass a 'JavaScript function' as parameter
auther: 08/11/2022
date: ankit patel
*/
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);
