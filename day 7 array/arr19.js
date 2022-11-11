/*
q19. Write a JavaScript function to get a random item from an array
auther: ankit patel
date: 11/11/ 2022
*/
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));
