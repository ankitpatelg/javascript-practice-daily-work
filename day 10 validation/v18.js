/*
18. Write a JavaScript function to check whether a given value is a DOM element
*/
function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log(is_dom_element(jQuery('body')[0]));
