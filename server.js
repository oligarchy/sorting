var sorter = require("./sorting");

console.log("Started");

var toSort = [];

toSort.push(101);
toSort.push(9);
toSort.push(6);
toSort.push(1);
toSort.push(4);
toSort.push(25);
toSort.push(21);
toSort.push(99);
toSort.push(0);
toSort.push(17);
toSort.push(54);

var mergeSorted = sorter.mergeSort(toSort);

if (mergeSorted !== null && mergeSorted !== undefined) {
	console.log("Sorted: " + mergeSorted.join(", "));
}
else {
	console.log("No MergeSort Results.");
}

var quickSorted = sorter.quickSort(toSort);

if (quickSorted !== null && quickSorted !== undefined) {
	console.log("Quick Sorted: " + quickSorted.join(", "));
}
else {
	console.log("No QuickSort Results.");
}
