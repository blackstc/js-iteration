

if (document.URL === "file:///Users/Chuck/gSchool/exercises/js-iteration/index.html") {
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
} else if (document.URL === "file:///Users/Chuck/gSchool/exercises/js-iteration/names.html") {
  var allNamesBtn = document.getElementById('all-names');
  var firstNamesBtn = document.getElementById('first-names');
  var lastNamesBtn = document.getElementById('last-names');
  var nameLengthBtn = document.getElementById('names-with-lengths');
  var namesList = document.getElementsByTagName('textarea')[0].value;
  var answer = document.getElementById('answer');

  allNamesBtn.addEventListener('click', function() {
    answer.innerHTML = "";
    var finalList = countNames(namesList);

    for (var i = 0; i < finalList.length; i++) {
      var node = document.createElement('P');
      var textNode = document.createTextNode(finalList[i]);
      node.appendChild(textNode);
      answer.appendChild(node);

    }
  });

  firstNamesBtn.addEventListener('click', function() {
    answer.innerHTML = "";
    var finalList = countNames(namesList);

    for (var i = 0; i < finalList.length; i++) {
      var node = document.createElement('P');
      var textNode = document.createTextNode(finalList[i].split(" ")[0]);
      node.appendChild(textNode);
      answer.appendChild(node);
    }
  });

  lastNamesBtn.addEventListener('click', function() {
    answer.innerHTML = "";
    var finalList = countNames(namesList);

    for (var i = 0; i < finalList.length; i++) {
      var node = document.createElement('P');
      var textNode = document.createTextNode(finalList[i].split(" ")[1]);
      node.appendChild(textNode);
      answer.appendChild(node);
    }
  });

  nameLengthBtn.addEventListener('click', function() {
    answer.innerHTML = "";
    var finalList = countNames(namesList);

    for (var i = 0; i < finalList.length; i++) {
      var node = document.createElement('P');
      var textNode = document.createTextNode(finalList[i] + " - " + finalList[i].replace(/\s+/g, '').length);
      node.appendChild(textNode);
      answer.appendChild(node);
    }
  });
}



