const a = ["deLhi", "kolKATa", "ChenNai", "gOa", "gUWAhati"];
let b =[];

for(k of a){
    let c = k.slice(1).toLowerCase();
    b.push(k[0].toUpperCase().concat(c));
}
console.log(b);
