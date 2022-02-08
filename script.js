"use strict"  //forces you to write in pure js, which is the kind of js we've used so far, can be put in a smaller scope but it's usually put at the top 
let p = "ciao"    //needs to be defined under strict, works without it

let pl = 4

console.log("🚀 ~ file: script.js ~ line 4 ~ pl", pl)

let pa = false

console.log("p,pl,pa", p, pl, pa);

let array = ["p", "pl", "pl"]
console.table(array)

let s1 = { name: "a", age: 2 }
let s2 = { name: "a", age: 2 }
let s3 = { name: "a", age: 2 }
let s4 = { name: "a", age: 2 }

const arr2 = [s1, s2, s3, s4]

console.table(arr2)

function checkifeven(numb) {     //this is preferrable since there's one less line to maintain
    return numb % 2 === 0
}

//check if even
function check(n) {
    return n % 2 === 0
}


let player = { name: "pijno", game: "space invaders", age: 58, address: "via IKYFL 420", score: 342 }
console.log("🚀 ~ file: script.js ~ line 33 ~ player", player)
console.log("🚀 ~ file: script.js ~ line 33 ~ player", JSON.stringify(player))
let number = 300
let iseven = checkifeven(number)
console.log("🚀 ~ file: script.js ~ line 39 ~ iseven", iseven)
player.score = 200

class EmptyStringError extends Error {
    constructor(message) {
        super(message)
    }
}
class InvalidStringError extends Error {
    constructor(message) {
        super(message)
    }
}

function parseStringtoNumbre(string) {
    if (string.length === 0) {
        throw new EmptyStringError("empty string man")
    }
    let stringnum = string
    if (string.includes(",")) {
        stringnum = string.replace(",", ".") //betterment of the parsefloat
    }
    const numb = parseFloat(stringnum)  //parseInt takes only 0decimal numbers, parseFloat gives decimals
    if (isNaN(numb)) {
        throw new InvalidStringError("string not valid!!!!!!!")  //lets you customize Error messages
    }
    return numb
}

let age;
try {
    age = parseStringtoNumbre("asa")
    console.log("age: ", age);
} catch (error) {
    if (error instanceof EmptyStringError) {
        age = 0
        console.log("age: ", age);
    } else {
        console.log(error.message);  //prints the message from the "throw new Error"
        console.log("try again");
    }


}



// if (isNaN(age)) {
//     console.log("couldnt convert");
// } else {
//     console.log("age: ", age);
// }

// console.log(parseStringtoNumbre("2"));
// console.log(parseStringtoNumbre("2.1"));
// console.log(parseStringtoNumbre("2,1"));
// console.log(parseStringtoNumbre("2p"));
// console.log(parseStringtoNumbre("p2"));