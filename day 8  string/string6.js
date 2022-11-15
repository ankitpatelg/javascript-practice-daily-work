/*
q6. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case
auther: ankit 
date: 15/11/2022
*/
swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));

/*
q7. Write a JavaScript function to convert a string into camel case
auther: ankit patel
date: 15/11/2022
*/
camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

/*
q8. Write a JavaScript function to uncamelize a string.
auther:ankit
date: 15/11/2022
*/
function uncamelize(str, separator) {
    // Assume default separator is a single space.
    if(typeof(separator) == "undefined") {
      separator = " ";
    }
    // Replace all capital letters by separator followed by lowercase one
    var str = str.replace(/[A-Z]/g, function (letter) 
    {
      return separator + letter.toLowerCase();
    });
    // Remove first separator
    return str.replace("/^" + separator + "/", '');
  }
  console.log(uncamelize('helloWorld'));
  console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));

  
  /*
  q9. Write a JavaScript function to concatenates a given string n times (default is 1)
  auther: ankit
  date: 15/11/2022
  */
  repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));


/*
q10. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
auther: ankit 
date: 15/11/2022
*/
insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',18));

 /*
 q11. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th
 auther: ankit patel
 date: 15/11/2022
 */
 humanize_format = function humanize(num) {
    if(typeof(num) == "undefined") return;
   if(num % 100 >= 11 && num % 100 <= 13)
         return num + "th";
         
         switch(num % 10) {
             case 1: return num + "st";
             case 2: return num + "nd";
             case 3: return num + "rd";
         }
         return num + "th";
     }
 console.log(humanize_format());  
 console.log(humanize_format(1));  
 console.log(humanize_format(8));  
 console.log(humanize_format(301));  
 console.log(humanize_format(402)); 
 