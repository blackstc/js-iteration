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
