//log all pairs of the array

const boxes = [1,2,3,4,5]

for(let i = 1; i <= boxes.length; i++) {
	for(let j = 1; j <= boxes.length; j++){
		console.log(i, j);
	}
};

//O(n^2)
