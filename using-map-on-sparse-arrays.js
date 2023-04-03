const a =[1,,3];
const b =a.map((x,index)=>{
    console.log(`visit : ${index}`);
    return x**2
    });
console.log(b);