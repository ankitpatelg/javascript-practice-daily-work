/*
q29. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip
auther: ankit patel
date: 11/11/2022
*/
//Source:https://bit.ly/3hEZdCl
//unzip
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));

/*
q29. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value
auther: ankit patel
date: 11/11/2022
*/
//Source:https://bit.ly/3hEZdCl
//Add the key-value pair to the object.
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});
 
console.log(indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], x => x.id));
