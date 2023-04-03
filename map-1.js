const a =[1,2,3,4,5];
const b = [1, 4, 9];
const map1= a.map(x=>x*2); // multiply by 2
const map2 = b.map(y=>Math.sqrt(y)); //sqrt of given value of array
const map3 = a.map((x,index)=>{
    console.log(`visit : ${index}`);
    if(index<4){
        return {[index]:x};
    }
});

console.log(map1);
console.log(map2);
console.log(map3);