/*Test 1*/
var mW = 95;
var mH =1.88;
var jW = 85;
var jH = 1.76;

var mBMI1 = mW/mH**2;
var mBMI2 = mW/(mH*mH);

var jBMI1 = jW/jH**2;
var jBMI2 = jW/(jH * jH);

console.log(mBMI1,mBMI2);
console.log(jBMI1,jBMI2);
var markHigherBMI =(mBMI1>jBMI1);
console.log(markHigherBMI);