function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please enter a number";
    }
    return Math.pow(number, 3);
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber('5'));
