function simpleNums(n) {
    n = +n;

    if (isNaN(n) || n <= 0) {
        return console.log('Нужно ввести положительное число')
    };

    let a = 3;
    let simplArray = [2,];
    let counter = 1;
    let flag, len;

    while (counter < n) {
        flag = 1;
        len = simplArray.length;

        if (a > 10 && a % 10 === 5) {
            a += 2;
            continue;
        };

        for (let i = 0; i < len; i++) {

            if (simplArray[i] ** 2 - 1 > a) {
                simplArray.push(a);
                counter++;
                flag = 0;
                break;
            };

            if (a % simplArray[i] === 0) {
                flag = 0;
                break;
            };
        }

        if (flag) {
            simplArray.push(a);
            counter++;
        };

        a += 2;
    };

    return simplArray
}


console.time('simpleNums')
console.log(simpleNums(process.argv[2]))
console.timeEnd('simpleNums')
