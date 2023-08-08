function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0){
        return "Invalid Input";
    }
    if (arr[0] === arr[1]){
        return "equal";
    }
    return arr.sort().reverse();
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
