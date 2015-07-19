var sumbtn = document.getElementById("sum-all");
var optionList = document.getElementsByTagName("option");
var answer = document.getElementById("answer");

sumbtn.addEventListener("click", function(){
    answer.innerHTML = sum(optionList);
});
