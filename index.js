function writeCards (names, event) {
  let thanks = []
  for (let n = 0; n < names.length; n++) {
    thanks.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
  }
  return thanks
}

function wrapGifts (gifts) {

}

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown (num) {
  for (let n = 0; n <= num; n++)
  console.log(n)
}
