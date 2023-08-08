function findAddress(obj) {
    let values = Object.values(obj);
    if (!Object.hasOwn(obj, 'street')) {
        values.unshift('__');
    }
    if (!Object.hasOwn(obj, 'house')) {
        values.splice(1, 0, '__');
    }
    if (!Object.hasOwn(obj, 'society')) {
        values.push('__');
    }
    return values.join(', ');
}

console.log(findAddress(
    {
        street: 10,
        house: "15A",
        society: "Earth Perfect"
    }
));
console.log(findAddress(
    {
        street: 10,
        society: "Earth Perfect"
    }
));
console.log(findAddress(
    {
        street: 10,
    }
));