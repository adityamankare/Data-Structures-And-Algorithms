const array1 = ['a','b','v','d'];
const array2 = ['t','x','z','b'];

//Naive Approach
function containsCommonItems1(arr1, arr2){
  for(var i=0; i<arr1.length; i++){
    for(var j=0;j<arr2.length; j++){
      if (arr1[i] === arr2[j])
        return true;
      }
   }
return false;
}

//containsCommonItems1(array1, array2);

//O(n*2) - Will take too much time


// Better Approach
function containsCommonItems2(arr1, arr2){
  let map = {};
  for(let i=0;i<arr1.length;i++){
    if(!map[array1[i]]){
      const item = array1[i];
      map[item] = true;
    }
  }
  for(let j=0;j<arr2.length;j++){
    if(map[array2[j]]){
      return true;
    }
  }
  return false
}

//containsCommonItems2(array1, array2);

//O(n+m) - Time Complexity

//Concise Approach
function containsCommonItems3(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}

containsCommonItems3(array1, array2);
