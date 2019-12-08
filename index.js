// Code your solutions in this file
const arr = ["Ada", "Brendan", "Ali"];

function writeCards(arr, eventName) {

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
  }
  
  return newArr;
}

writeCards(arr, "birthday");

function countDown() {

    let i = 0;

    while(i <= 10) {
      console.log(i);
      i++;
    }
  }
  
countDown();