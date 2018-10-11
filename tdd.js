function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else {
		var sum = 0;
		var splitNums = numbers.split(/\n|,/); //regex to handle both new line and comma

		for(var i = 0; i < splitNums.length; i++) {
			sum += parseInt(splitNums[i]);
		}
		return sum;
	}
}

module.exports = Add;