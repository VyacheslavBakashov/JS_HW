const rl = require('readline').createInterface(process.stdin,  process.stdout);
const cnt = getCounter();
let numForGuess = Math.floor(Math.random() * 1000);
let fs = require('fs');

function getCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter
    }
}

function question(q) {
    return new Promise((resolve) => {
        rl.question(q, data => {
            resolve(data)
        })
    })
}

function writeToFile(data) {
    return fs.appendFile('log.txt', data, (err) => {
        if (err) {
            console.log('Ошибка записи файла!');
        }
    })
}

async function guessNumber() {
    let answ, inp;
    while (true) {
        let cmd = await question(`Попытка: ${cnt()}. Введите число: `);
        inp = cmd;
        if (cmd === 'q') {
            rl.close();
            answ = 'Выход'
            break
        } else if (cmd < numForGuess) {
            answ = 'Меньше чем нужно';
        } else if (cmd > numForGuess) {
            answ = 'Больше чем нужно';
        } else {
            answ = `В точку! Использовано попыток: ${cnt() - 1}.`;
            rl.close();
            break
        }
        console.log(answ)
        writeToFile(`${inp} ---> ${answ}\n`)
    }
    console.log(answ)
    writeToFile(`${inp} ---> ${answ}`)
}

function main() {
    console.log('Загадано:', numForGuess);
    console.log('Угадайте число от 0 до 1000, для выхода введите "q"');
    guessNumber();
}

main()
