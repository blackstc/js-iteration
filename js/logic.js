/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a `for` loop to make this happen.
*/

function sum (options) {
	var total = +options[0].value;

	for (var i = 1; i < options.length; i++) {
	 	total += +options[i].value;
	 };

	return total;
}

function average(options) {
	var total = 0;

	for (var i = 0; i < options.length; i++) {
		total += options[i];
	};

	return total / options.length;
}
