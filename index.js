// Code your solutions in this file
function writeCards(arr, event) {
    let messages = []
    for (let i = 0; i < arr.length; i++){
        messages[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    }
    return messages
}

function countDown(num) {
    while(num >= 0){
        console.log(num);
        num--;
    }
}