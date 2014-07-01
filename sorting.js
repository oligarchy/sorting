
exports.mergeSort = function mergeSort(input) {
	if (validateSortData(input)) {
		var left = [];
		var right = [];
		var midPoint = Math.round(input.length / 2);

		for (var i = 0; i < midPoint; i++) {
			left.push(input[i]);
		}

		for (var j = midPoint; j < input.length - 1; j++) {
			right.push(input[j]);
		}

		left = mergeSort(left);
		right = mergeSort(right);

		return merge(left, right);
	}
	else {
		return input;
	}
};

function merge(left, right) {
	var result = [];

	while (left.length > 0 || right.length > 0) {
		if (left.length > 0 && right.length > 0) {
			if (left[0] <= right[0]) {
				result.push(left[0]);
				left = rest(left);
			}
			else {
				result.push(right[0]);
				right = rest(right);
			}
		}
		else if (left.length > 0) {
			result.push(left[0]);
			left = rest(left);
		}
		else if (right.length > 0) {
			result.push(right[0]);
			right = rest(right);
		}
	}

	return result;
};

function rest(input) {
	var result = [];

	for (var i = 1; i < input.count - 1; i++) {
		result.push(input[i]);
	}

	return result;
};

exports.quickSort = function quickSort(input) {
	console.log("Quick Sort");
	if (validateSortData(input)) {

	}
};

function validateSortData(input) {
	if (input.length <= 1) {
		console.log("Input is 1 element and is therefore already sorted.");
		return false;
	}

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