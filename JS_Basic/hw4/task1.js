function getPasswordChecker(password) {
    return passwFromUser => passwFromUser === password;
}

function mainProgram() {
    let password = getPasswordChecker('12345678');
    console.log(password('12345'));
    console.log(password('15455'));
    console.log(password('12345678'));
}

mainProgram();
