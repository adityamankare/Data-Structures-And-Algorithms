function mergedSort(firstArray, secondArray){
	//declare variables
	const mergedSortedArray = [];
	let firstItemInArray = firstArray[0];
	let secondItemInArray = secondArray[0];
	let i = 1;
	let j = 2;

	//check for input 
	if(firstArray.length === 0){
		return secondArray;
	}
	if(secondArray.length === 0){
		return firstArray;
	}
	
	//algorithm implementation
	while(firstItemInArray || secondItemInArray){
		if(firstItemInArray < secondItemInArray || secondItemInArray === undefined){
			mergedSortedArray.push(firstItemInArray);
			firstItemInArray = firstArray[i];
			i++;
		}
		else{
			mergedSortedArray.push(secondItemInArray);
			secondItemInArray = secondArray[j];
			j++;
		}
	}
	return mergedSortedArray;
}

//call function
mergedSort([0,3,4,31], [3,4,6,30]);
