let binarySearch = function(arr = [],val = 0){
    let right = arr.length-1;
    let left = 0;
    while(left <= right){
        let halve = Math.floor((right+left) /2);
        if(arr[halve] == val)return halve;
        if(arr[halve]<val){
            left = halve+1
        }else if(arr[halve] > val){
            right = halve -1
        }
    }
    return -1
}

console.log(binarySearch([2,3,4],4))