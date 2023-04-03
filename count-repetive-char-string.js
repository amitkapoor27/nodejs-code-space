const example1 = 'abacadadefada44445555555';

function freqChar(abc){
    let b =[];
    for(let a in abc){
        if(!Number(abc[a])){
            if(b[abc[a]]){  
                b[abc[a]] += 1;
            }
            else {
                b[abc[a]] = 1;
            }
        }
    }
    for(let k in b){
        
        if(b[k]>1){
            console.log(k);
        }
    }
    
}

freqChar(example1);