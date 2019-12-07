function writeCards(names, event) {
    let asdfasdf = []
    for (let i = 0; i < names.length; i++) {
        asdfasdf.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return asdfasdf;
};

function countDown(number) { 
    while (number >= 0) {
        console.log(number);
        number--;
    };
};