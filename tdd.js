function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else {
		var sum = 0;
		var splitNums = numbers.split(/\n|,/); //regex to handle both new line and comma
		var negatives = new Array();
		var errorMessage = "Negatives not allowed: ";

		for(var i = 0; i < splitNums.length; i++) {
			if(parseInt(splitNums[i]) < 0) {
				negatives += splitNums[i];
			}
			sum += parseInt(splitNums[i]);
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