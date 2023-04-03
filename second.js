var d1=96;
var d2=108;
var d3=89;
console.log(d1,d2,d3);
var k1=88;
var k2=91;
var k3=110;
console.log(k1,k2,k3);
var avD =(d1+d2+d3)/3;
var avK =(k1+k2+k3)/3;
if(avD>avK){
    console.log("Dolphins wins");
} else if(avK>avD){
    console.log("Koalas wins");
} else{
    console.log("Draw");
}