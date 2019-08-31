//Create a function that reversesa string:
//'Hi, my name is Adi' should be:
//'idA si eman ym ,iH'

function reverse(str){
	var splitString = str.split("");
	var reverseSplitString = splitString.reverse();
	var result = reverseSplitString.join("")
	console.log(result);
	return result;
}

reverse('Hi, my name is Adi');
