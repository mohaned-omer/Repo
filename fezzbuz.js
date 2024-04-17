const Fezz = function (start,end){
    let i = start ;
    let arr = [];
    function say(theArray,theCounter){
        if (theArray.length === 0){
            return theCounter
        }
    }
    while(i<end){
        
        if(i%3===0){arr.push('fuzz')} ;
        if(i%5===0){arr.push('buzz')} ;
        if(i%7===0){arr.push('foo')} ;
        if(i%11===0){arr.push('bo')} ;
        console.log( say(arr,i) , arr)
        i++;
        arr = [] ;
    }
    return arr
}
Fezz(0,200) ;