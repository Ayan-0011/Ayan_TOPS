function duplicates(arr){
  let result = [];

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(duplicates([1,2,3,55,55,60]));
