function rotateString(str) {
    setInterval(() => {
        str = str[str.length - 1] + str.substring(0, str.length - 1);
        console.log(str);
    }, 1000);
}

rotateString('w3resource');
