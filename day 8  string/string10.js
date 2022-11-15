/*
q19. Write a JavaScript function to remove non-printable ASCII chars.
auther: ankit 
date: 15/11/2022
*/
function remove_non_ascii(str) {
  
    if ((str===null) || (str===''))
         return false;
   else
     str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
  }
  
  console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

  
  /*
  q20.Write a JavaScript function to create a Zerofilled value with optional +, - sign.
  auther: ankit
  date: 15/11/2022
  */
  function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));

console.log(zeroFill(29, 4));

/*
q21.Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison
auther:ankit
date:15/11/2022
*/
function compare_strings(str1, str2)
{
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));
