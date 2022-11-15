/*
q22. Write a JavaScript function to create a case-insensitive search
auther: ankit
date: 15/11/2022
*/
function case_insensitive_search(str, search_str)
  {
    var result= str.search(new RegExp(search_str, "i"));
  
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
   }

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));


/*
q22. Write a JavaScript function to uncapitalize the first character of a string
auther: ankit
date:15/11/2022
*/
function Uncapitalize(str1){
    return str1.charAt(0).toLowerCase() + str1.slice(1);
  }
   console.log(Uncapitalize('Js string exercises'));
 
   /*
   q23.Write a JavaScript function to Uncapitalize the first letter of each word of a string
   auther: ankit
   date:15/11/2022
   */
   function unCapitalize_Words(str)
   { 
     return str.replace(/\w\S*/g, 
       function(txt)
          {
             return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
   }
   
   console.log(unCapitalize_Words('Js String Exercises'));
   