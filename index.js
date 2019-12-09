function writeCards(names) {
    let newVar = []
    for (let i = 0; i < names.length; i++) {
        newVar.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newVar;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}