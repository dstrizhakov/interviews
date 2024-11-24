function arrayDiff(a, b){
    return a.filter((num) => !b.includes(num));
}

arrayDiff([2,4,12,3,1,5,8], [12,4,2]); // [3, 1, 5, 8]