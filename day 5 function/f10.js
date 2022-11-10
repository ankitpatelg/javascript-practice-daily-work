/*
q10. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output
auther: ankit patel
date: 08/11/2022
*/
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
