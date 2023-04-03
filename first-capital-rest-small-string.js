const a = ["deLhi", "kolKATa", "ChenNai", "gOa", "gUWAhati"];
const len = a.length;

for (let i = 0; i < len; i++) {
    const str = a[i];
    let fle = str[0].toUpperCase();
    let rle = str.slice(1).toLowerCase();
    console.log(fle+rle);
}
