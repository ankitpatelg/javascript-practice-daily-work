/*
q27. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position
auther: ankit patel
date: 11/11/2022
*/
function array_range(start, len) 
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));
