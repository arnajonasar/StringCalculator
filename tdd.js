function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else {
		var sum = 0;
		var delimiters = checkForDifferentDelimiters(numbers);
		var splitNums = numbers.split(delimiters); // regex
		var negatives = checkForNegatives(splitNums);
		var errorMessage = "Negatives not allowed: ";

		for(var i = 0; i < splitNums.length; i++) {
			// numbers bigger than 1000 are ignored
			if(parseInt(splitNums[i]) <= 1000) {
				sum += parseInt(splitNums[i]);
			}
		}

		// if there are negative numbers
		if(negatives.length > 0) {
			for(var i = 0; i < negatives.length; i++) {
				// we don't want comma between - and the number
				// or if there is only one negative number
				if(negatives[i] == '-' || negatives.length == 1) { 
					errorMessage += negatives[i];
				}
				else {
					errorMessage += negatives[i] + ",";
				}
			}
			throw Error(errorMessage);
		}
		return sum;
	}
}

function checkForDifferentDelimiters(numbers) {
	var delimiters = new RegExp("[\n,]");
	// if the first two characters are / we expect a different delimiter
	if(numbers[0] == '/' && numbers[1] == '/' && numbers[3] == '\n') {
		// add the new delimiter to the list of delimiters
		delimiters = new RegExp("[\n," + numbers[2] + "]");
	}
	return delimiters;
}

function checkForNegatives(numbers) {
	var negatives = new Array();
	for(var i = 0; i < numbers.length; i++) {
		if(parseInt(numbers[i]) < 0) {
			negatives += numbers[i];
		}
	}
	return negatives;
}

module.exports = Add;