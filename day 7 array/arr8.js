/*
q8. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
auther: ankit patel
date: 08/11/2022
*/
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));
