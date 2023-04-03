const abc= (list,b)=>{
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      n=list[list.length-1]+list[list.length-2];
      if(n>b){
        resolve("hi");
      }
      else{
        list.push(n);
        resolve(abc(list,b));
      }
    },1);
  });
}

let list =[];
list.push(0);
list.push(1);
let b=1000;
abc(list,b).then(function(){
  console.log(list);
});