const a=[{name:'sagar',age:34, team:[{name:'abc',age:21},{name:'xyz'}]},{name:'alpha'}];

function printValue(arr){
    
    for(let key in arr){
        let narr=arr[key];
        for(let ke1 in narr){
            if(typeof(narr[ke1])!=="object"){
               console.log(ke1+":"+narr[ke1]);
            }
            else
            {
                printValue(narr[ke1]);
            }
        }
    }
}
printValue(a);


