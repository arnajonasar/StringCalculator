function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else {
		var sum = 0;
		var delimiters = new RegExp("[\n,]");

		// if the first two characters are / we expect a different delimiter
		if(numbers[0] == '/' && numbers[1] == '/' && numbers[3] == '\n') {
			// add the new delimiter to the list of delimiters
			delimiters = new RegExp("[\n," + numbers[2] + "]");
		}

		var splitNums = numbers.split(delimiters); // regex
		var negatives = new Array();
		var errorMessage = "Negatives not allowed: ";

		for(var i = 0; i < splitNums.length; i++) {
			if(parseInt(splitNums[i]) < 0) {
				negatives += splitNums[i];
			}
			// numbers bigger than 1000 are ignored
			else if(parseInt(splitNums[i]) <= 1000) {
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

module.exports = Add;