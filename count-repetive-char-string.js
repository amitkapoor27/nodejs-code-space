const example1 = 'abacadadefada44445555555';

function freqChar(abc){
    const b =[];
    for(const a of example1){
        if(Number(a)) continue;
        if(!b[a]){
            b[a]=0;
        }
            b[a]++;
        
    }
    for(let k in b){
        
        if(b[k]>1){
            console.log(k);
        }
    }
    
}

freqChar(example1);
