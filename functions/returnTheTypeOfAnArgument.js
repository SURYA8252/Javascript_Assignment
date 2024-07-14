function getType(arg) {
    return typeof arg;
}

console.log(getType(42));
console.log(getType('hello'));
console.log(getType(true));
console.log(getType({}));
console.log(getType(undefined));
console.log(getType(function() {}));
