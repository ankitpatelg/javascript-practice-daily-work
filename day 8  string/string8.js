/*
q14. Write a JavaScript function that can pad (left, right) a string to get to a determined lengt
auther: ankit 
date: 15/11/2022
*/
function formatted_string(pad, user_str, pad_pos)
{
  if (typeof user_str === 'undefined') 
    return pad;
  if (pad_pos == 'l')
     {
     return (pad + user_str).slice(-pad.length);
     }
  else 
    {
    return (user_str + pad).substring(0, pad.length);
    }
}
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));

/*
q15. Write a JavaScript function to truncate a string to a certain number of words.
auther: ankit 
date: 15/11/2022
*/
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
