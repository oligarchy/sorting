
exports.mergeSort = function mergeSort(input) {
	if (validateSortData(input)) {
		var left = [];
		var right = [];
		var midPoint = Math.round(input.length / 2);

		for (var i = 0; i < midPoint; i++) {
			left.push(input[i]);
		}

		for (var j = midPoint; j < input.length; j++) {
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

	for (var i = 1; i < input.length; i++) {
		result.push(input[i]);
	}

	return result;
};

function validateSortData(input) {
	if (input.length === 1) {
		// array of 1 is already sorted.
		return false;
	}

	if (input === null) {
		return false;
	}

	if (input.length === 0) {
		return false;
	}

	return true;
};

var toSort = null;

exports.quickSort = function quickSort(input, left, right) {
	if (toSort == null) {
		toSort = input;
	}

	if (validateSortData(input)) {
		if (left < right) {
			var part = partition(toSort, left, right);
			input = quickSort(input, left, part - 1);
			input = quickSort(input, part + 1, right);

			return input;
		}
		else {
			return input;
		}
	}
	else {
		return input;
	}
};

function partition (input, left, right) {
	var pivotIndex = choosePivot(input, left, right);
	var pivotValue = input[pivotIndex];
	var storedIndex = left;

	input = swap(toSort, pivotIndex, right);

	for (var i = left; i < right; i++) {
		if(input[i] <= pivotValue) {
			input = swap(input, i, storedIndex);
			storedIndex = storedIndex + 1;
		}

		input = swap(toSort, storedIndex, right);
	}

	return storedIndex;
};

function swap (input, left, right) {
	var temp = input[left];
	input[left] = input[right];
	input[right] = temp;

	return input;
};

function choosePivot (input, left, right) {
	return left;  // for now...
};

function choosePivotOld (input) {
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