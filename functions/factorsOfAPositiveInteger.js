function factors(num) {
    const factorArr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorArr.push(i);
        }
    }
    return factorArr;
}

console.log(factors(15));
console.log(factors(16));
console.log(factors(17));
