var sumBtn = document.getElementById("sum-all");
var countSelectBtn = document.getElementById('count-selected');
var countSumBtn = document.getElementById('sum-selected');
var avgBtn = document.getElementById('average-all');
var avgSelectBtn = document.getElementById('average-selected');
var optionList = document.getElementsByTagName("option");
var answer = document.getElementById("answer");

sumBtn.addEventListener("click", function(){
    answer.innerHTML = sum(optionList);
});

countSelectBtn.addEventListener("click", function(){
    answer.innerHTML = countSelect(optionList);
});

countSumBtn.addEventListener("click", function(){
    answer.innerHTML = sumSelect(optionList);
});

avgBtn.addEventListener("click", function(){
    answer.innerHTML = average(optionList);
});

avgSelectBtn.addEventListener("click", function(){
    answer.innerHTML = avgSelect(optionList);
});
