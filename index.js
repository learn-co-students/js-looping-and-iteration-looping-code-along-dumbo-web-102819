// Code your solutions in this 


function writeCards(message, event)
{
    let newArray = [];

    for (let i = 0; i < message.length; i++)
    {
        newArray.push(`Thank you, ${message[i]}, for the wonderful ${event} gift!`);
    }

    return newArray;
}

function countDown(count)
{
    let i = 0; 
    while(i <= count)
    {
        console.log(count--);
    }
}

