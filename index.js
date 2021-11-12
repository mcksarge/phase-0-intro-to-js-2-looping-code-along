const message = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
       
    }

    return message;

}


function countDown(number) {
    let n = 10;
    while (n >= 0) {
        console.log(n);
        
        n--;
    }
    return n;
}

