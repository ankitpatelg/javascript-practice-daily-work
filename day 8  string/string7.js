/*
q12. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters
auther: ankit patel
date: 15/11/2022
*/
text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


/*
q13. Write a JavaScript function to count the occurrence of a substring in a string.
auther: ankit 
date: 15/11/2022
*/
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
