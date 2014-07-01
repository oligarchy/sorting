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

var sorted = sorter.mergeSort(toSort);

if (sorted !== null && sorted !== undefined) {
	console.log("Sorted: " + sorted.join(", "));
}
else {
	console.log("Nothing to report.");
}