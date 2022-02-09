// "use strict";

// let pippo = "ciao";

// let pluto = 4;
// console.log("🚀 ~ file: script.js ~ line 6 ~ pluto", pluto);

// let paperino = false;
// console.log("🚀 ~ file: script.js ~ line 8 ~ paperino", paperino);

// let array = ["pippo", "pluto", "paperino","pippo", "pluto", "paperino","pippo", "pluto", "paperino","pippo", "pluto", "paperino"];
// console.table(array)

// let stud1 = {name: "andrea", age:12}

// let stud2 = {name: "giovanni", age:13}

// let stud3 = {name: "beatrice", age:16}

// let stud4 = {name: "veronica", age:12}

// const array2 = [stud1, stud2, stud3, stud4];

// console.table(array2);

// function checkIfIsEven(NumberToCheck) {
//     return NumberToCheck % 2 === 0;
// }

// function check(n) {
//     return n % 2 === 0;
// }


// let player = {name: "andrea", surname:"asioli", school: "leopardi", game:"space invader", age:12, address: "via piantelli 12",  score: 112};

// console.log("🚀 ~ file: script.js ~ line 37 ~ player", player);

// console.log("🚀 ~ file: script.js ~ line 37 ~ player", JSON.stringify(player));

// let number = 300;

// let isEven = checkIfIsEven(number);

// player.score = 200;

class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}
class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}

// function parseStringToNumber(string) {
//     if (string.length === 0) {
//         throw new EmptyStringError("ciao")
//     }
//     let stringNumber = string;
//     if (string.includes(",")) {
//         stringNumber = string.replace(",", ".")
//     }
//     const number = parseFloat(stringNumber)
//     if (isNaN(number)){
//         throw new InvalidStringError("stringa non valida")
//     }
//     return number;
// }

// let age;

// try {

//     age = parseStringToNumber("");
//     console.log("age: ",age);

// } catch (error) {

//     if (error instanceof EmptyStringError) {
//         console.log(error.message)
//         age = 0;
//         console.log("age: ",age);
//     } else{
//         console.log(error.message)
//         console.log("inserisci di nuovo")
//     }

//     // if (error.message === "stringa vuota") {
//     //     age = 0;
//     //     console.log("age: ",age);
//     // } else {
//     //     console.log(error.message)
//     //     console.log("inserisci di nuovo")
//     // }

// }

// console.log(parseStringToNumber("2"));
// console.log(parseStringToNumber("2.1"));
// console.log(parseStringToNumber("2,1"));
// console.log(parseStringToNumber("2pippo"));
// console.log(parseStringToNumber("pippo2"));
// console.log(parseStringToNumber("pippo"));



let csvString = "12; 34; 12.5; 567; 11,1"
let csvString2 = "false; 34; pippo; 567; 11,1"
let csvString3 = "a; b; c; 5; d; f; false; 960"
let csvString4 = ""

class Parser {
    /**
     * The function takes a string as an argument and returns an array of numbers  //AI DOC WRITER, CTRL+.
     * @param {string} string - the string that will be parsed
     * @returns Nothing.
     */
    static stringparser(string) {
        let parsedArray = []
        let stringNumber = string
        stringNumber = (string.replace(/[,]+/, ".")).replace(/[ ]/g, "")
        parsedArray = stringNumber.split(";")

        let rightCount = 0
        let newArray = []
        for (let i = 0; i < parsedArray.length; i++) {
            const element = parsedArray[i];
            if (!isNaN(element)) {
                rightCount++
                newArray.push(element)
            }
        }

        if (parsedArray.length === rightCount) {
            console.log("the string has been fully parsed");
        } else if (rightCount > 0 && rightCount < parsedArray.length) {
            throw new PartialInvalidStringError("Partially invalid string, the result was: " + newArray)
        } else if (rightCount = 0) {
            throw new InvalidStringError("The entire string is invalid")
        }

        if (newArray.length === 0) {
            throw new EmptyStringError("The string is empty")              //does not return empty error
        } else {
            return newArray
        }

    }
}

class PartialInvalidStringError extends Error {
    constructor(message, partialResult) {
        super(message);
        this.partialResult = partialResult
    }
}
// try {
//     Parser.stringparser(csvString2)
// } catch (error) {
//     console.log(error.message);
//     if (error instanceof PartialInvalidStringError) {
//         newArray = error.partialResult
//     }
// }
//console.log(Parser.stringparser(csvString2)); 

/*"12; 13; 45; 23\n
2.1; 13; 34; 21\n
3.2; 12; 4; 22\n" 
[]fullarray with no splits or newlines (do json stringify?)
then each newline creates a new subarray (matrix)

"name; age; school; grade\n
pippo; 13; colombo; 3\n
pluto; 12; leopardi; 2\n
paperino; 11; bertani; 2\n"
[{name: "pippo", age: 13, school: "colombo", grade: 3},{pluto},{paperino}] (must be something with json most likely)
*/


let listie = "12; 13; 45; 23\n 2.1; 13; 34; 21\n 3.2; 12; 4; 22\n"

function newparse1(string) {
    let parsedArray = []
    let stringNumber = string
    stringNumber = ((string.replace(/[ ]/g, ""))).replace(/\n/, ";")
    parsedArray = stringNumber.split(/[\n;]+/)
    return parsedArray
}

console.log(newparse1(listie));

function newparse2(string) {
    let parsedArray = []
    let stringNumber = string
    stringNumber = string.replace(/[ ]/g, "")
    parsedArray = stringNumber.split(/[\n;]+/)
    return parsedArray
}

console.log(newparse2(listie));

let listObjs = "name; age; school; grade\npippo; 13; colombo; 3\npluto; 12; leopardi; 2\npaperino; 11; bertani; 2\n"
let s = JSON.stringify(listObjs)
let sj = JSON.parse(s, (key, value)=>{return value;}) //??????????
console.log(sj);