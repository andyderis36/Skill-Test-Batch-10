/*
"I am A Great human"
into
"I ma A Taerg namuh"

// note: observe the Capital word behavior. Capital only when in the first letter
*/

const wordsReverse = str => str.split(' ').map(
    word => 
    word.split('').reverse()
    .map(
        (letter, i, arr) => 
        arr[arr.length - i - 1].toUpperCase() === arr[arr.length - i - 1] ?
        letter.toUpperCase() :
        arr[arr.length - i - 1].toLowerCase() === arr[arr.length - i - 1] ?
        letter.toLowerCase() :
        letter
    )
    .join('')
)
.join(' ');

console.log("I am A Handsome Boy ==> "+ wordsReverse("I am A Handsome Boy"));
document.write("I am A Handsome Boy ==> "+ wordsReverse("I am A Handsome Boy"));