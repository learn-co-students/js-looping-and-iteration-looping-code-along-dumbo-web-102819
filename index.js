// Code your solutions in this file

function writeCards(person, thing) {
   let newArray = []
    for (let i = 0; i < person.length; i++) {
        newArray.push(`Thank you, ${person[i]}, for the wonderful ${thing} gift!`);
    }
    return newArray;
}

writeCards(names,event)


function countDown(beginNumber) {
    while (beginNumber > 0) {
        console.log(beginNumber);
        beginNumber -= 1;
    }
    console.log(beginNumber);
}