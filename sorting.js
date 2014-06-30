
	function mergeSort(input) {
		console.log("Merge Sort");
		if (validateSortData(input)) {

		}
	};

	function validateSortData(input) {
		if (input === null) {
			console.log("Input is null.");
			return false;
		}

		if (input.length === 0) {
			console.log("No elements to sort.");
			return false;
		}

		console.log(input.length + " items to sort.");
		console.log(input.join(", "));

		return true;
	};

	function choosePivot (input) {
		// first find the three possible values.
		var first = input[0];
		var last = input[input.length - 1];

		var midPoint = Math.round(input.length / 2)
		var mid = input[midPoint];

		console.log("Pivot choices: " + first + "/" + mid + "/" + last);

		// if they're already sorted, don't waste time resorting.
		if (first < mid && mid < last) {
			console.log("Pivot is 1: " + mid);
			return mid;
		}
		else if (last > mid && mid > first) {
			console.log("Pivot is 2: " + mid);
			return mid;
		}

		// insertion sort.
		var sorted = [];

		if (mid > first) {
			sorted.push(first);
			sorted.push(mid);
		}
		else {
			sorted.push(mid);
			sorted.push(first);
		}

		if (last > sorted[1]) {
			sorted.push(last);
		}
		else {
			if (last > sorted[0]) {
				sorted[2] = sorted[1];
				sorted[1] = last;
			}
			else {
				sorted[2] = sorted[1];
				sorted[1] = sorted[0];
				sorted[0] = last;
			}
		}

		console.log("Pivot is 3: " + sorted[1]);
		return sorted[1];
	};