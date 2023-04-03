function getPrime(n){
  let count=0;
  let num=2;
  while(count<n){
    let dbCount=0;
    for(let i=1;i<num;i++){
      if(num%i==0){
        dbCount++;
      }
    }
    if(dbCount<3){
      console.log(num);
      count++;
    }
    num=num+1;
  }
}

getPrime(1000);