
const a = ["a","b","c"];
/*for (const x of a ){
    console.log(x);
}*/

/******************************** */
const arr = ["a", "b", "c", "d"];
const arrIter = arr[Symbol.iterator]();

console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());

//console.log(arrIter.next().value);

/*************************** */
function logIterable(it){
    
    if(typeof it[Symbol.iterator] !== "function"){
        console.log(it, "is not iterable.");
        return;
    }
    for(let c of it){
        console.log(c);
    }
}
/*
logIterable(["a", "b", "c"]);
console.log("------------------");
logIterable("abc");
console.log("------------------");
logIterable(123);*/