const rl = require('readline').createInterface(process.stdin,  process.stdout);
const cnt = getCounter();
let numForGuess = Math.floor(Math.random() * 1000);

function getCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter
    }
}

function guessNumber() {

    rl.question('Введите число: ', (cmd) => {
        console.log(`Вы ввели: ${cmd}, попытка: ${cnt()}`);

        if (cmd === 'q') {
            rl.close();
            return
        } else if (cmd < numForGuess) {
            console.log('Меньше чем нужно');
        } else if (cmd > numForGuess) {
            console.log('Больше чем нужно');
        } else {
            console.log(`В точку! Использовано попыток: ${cnt() - 1}.`);
            rl.close();
            return
        }

        guessNumber();

    })
}

function main() {
    console.log('Загадано:', numForGuess);
    console.log('Угадайте число от 0 до 1000, для выхода введите "q"');
    guessNumber()
}

main()
