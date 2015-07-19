/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var sumbtn = document.getElementById("sum-all");
var optionList = document.getElementsByName("options");
var sumClick = sumbtn.addEventListener("click", sum(optionList));
console.log(sumClick);

var answer = document.getElementById("answer").innerHTML = sumClick;