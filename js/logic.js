function sum (options) {
	var total = 0;
	for (var i = 0; i < options.length; i++) {
	 	total += +options[i].value;
	 }
	return total;
}

function countSelect(options) {
	var count = 0;
	for (var i = 0; i < options.length; i++) {
		if (options[i].selected === true) {
			count++;
		}
	}
	return count;
}

function sumSelect(options) {
	var total = 0;
	for (var i = 0; i < options.length; i++) {
		if (options[i].selected === true) {
			total += +options[i].value;
		}
	}
	return total;
}

function average(options) {
	var total = 0;
	for (var i = 0; i < options.length; i++) {
		total += +options[i].value;
	}
	return total / options.length;
}

function avgSelect(options) {
	var total = 0;
	var count = 0;
	for (var i = 0; i < options.length; i++) {
		if (options[i].selected === true) {
			total += +options[i].value;
			count++;
		}
	}
	return total / count;
}

function countNames(names) {
	var newNamesList = names.split("\n");
	var finalList = "";

	for (var i = 0; i < newNamesList.length; i++) {
		finalList = newNamesList[i] + "\n";
	}
	return newNamesList;
}
