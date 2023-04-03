function rangeOfNumbers(startNum, endNum) {
  if(endNum<startNum){
    return [];
  }
  else{
    let cntArr= rangeOfNumbers(startNum,endNum-1);
    cntArr.push(endNum);
    return cntArr;
  }
}

console.log(typeof rangeOfNumbers(1,5));
console.log(rangeOfNumbers(1,5));