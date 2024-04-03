export const getRow = (arr, rowNum) => {
	let bus = arr.length;

	let row1 = [];
	let row2 = [];
	let row3 = [];
	let row4 = [];
	let row5 = [];

	for (let i = bus; i > 0; i--) {
		row5.push(arr[i - 1]); //37
		row4.push(arr[i - 2]); //36

		if (i > bus - 5) {
			row3.push(arr[i - 3]); //35
			row2.push(arr[i - 4]); //34
			row1.push(arr[i - 5]); //33
			i -= 4;
		} else {
			row2.push(arr[i - 3]); //34
			row1.push(arr[i - 4]); //33
			i -= 3;
		}
	}
	switch (rowNum) {
		case 1:
			return row1;
		case 2:
			return row2;
		case 3:
			return row3;
		case 4:
			return row4;
		case 5:
			return row5;

		default:
			break;
	}
};
