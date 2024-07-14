function secondLowestGreatest(arr) {
    arr.sort((a, b) => a - b);
    const uniqueArr = [...new Set(arr)];
    const secondLowest = uniqueArr[1];
    const secondGreatest = uniqueArr[uniqueArr.length - 2];
    return [secondLowest, secondGreatest];
}

console.log(secondLowestGreatest([1, 2, 3, 4, 5]));
