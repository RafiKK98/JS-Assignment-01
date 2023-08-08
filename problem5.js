function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Array is empty";
    }
    let total = 0;
    for (const change of changeArray) {
        total += change;
    }
    return total > totalDue;
}

console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));
