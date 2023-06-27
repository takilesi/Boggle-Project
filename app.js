// input player names

const player = {
    player1: "", 
    player2: ""
}; 

// game's letter object 

const fourBy4 = {
    // letter1: "", 
    // letter2: "", 
    // letter3: "", 
    // letter4: "", 
    // letter5: "", 
    // letter6: "", 
    // letter7: "", 
    // letter8: "", 
    // letter9: "", 
    // letter10: "", 
    // letter11: "", 
    // letter12: "", 
    // letter13: "", 
    // letter14: "", 
    // letter15: "", 
    // letter16: ""
}; 

// each players word list object 

const p1 = {
    word1: [""],
    word2: [""],
    word3: [""],
    word4: [""],
    word5: [""],
    word6: [""],
    word7: [""],
    word8: [""],
    word9: [""],
    word10: [""]
}; 

// const p2 = {
//     word1: ["", time, score], 
//     word2: ["", time, score],
//     word3: ["", time, score],
//     word4: ["", time, score],
//     word5: ["", time, score],
//     word6: ["", time, score],
//     word7: ["", time, score],
//     word8: ["", time, score],
//     word9: ["", time, score],
//     word10: ["", time, score]
// }; 





const putAin = () => {  

    fourBy4.letter1 = "a"; 
    fourBy4.letter2 = "c";
    fourBy4.letter3 = "t";

    document.querySelector(".letter1").innerHTML = fourBy4.letter1; 
    document.querySelector(".letter2").innerHTML = fourBy4.letter2;
    document.querySelector(".letter3").innerHTML = fourBy4.letter3;
}



//         }
//     }
// }
 
// const roll = () => {
//     for (i=1; i<17; i++){
//         let letterNumber = `letter${i}`; 
//         document.getElementById(letterNumber).innerHTML = fixQ();
//     }
// }



const letters = Array.from(document.querySelectorAll('.letter'));

const showTheWord1 = () => {
    document.querySelector(".showWord1").innerHTML += p1.word1; 
    // p1.word1[1] = true; 
}

const showTheWord4 = () => {
    document.querySelector(".showWord4").innerHTML += letters.forEach(function(letter) {letter}); 
}


             // wordLength.max stored for bonus points at end 








// eachPlay timer functions


// game timer functions 




// use roll() to create 16 variables and feed a single letter from the alphabet from letterFreak into the 4x4 gameboard matrix 




const roll = () => {
    for (i=1; i<17; i++){

        let letterTemp = fixQ(); 

        let letterNumber = `l${i}`; 
        document.getElementById(letterNumber).innerHTML = letterTemp;

        // push to fourBy4 object 
        let objectLetterNumber = `letter${i}`

        fourBy4[objectLetterNumber] = letterTemp;                 

    }
}

const test = () => {
    document.querySelector(".test").innerHTML += JSON.stringify(fourBy4); 
}

const let1 = () => {
    tempWord = ""; 

    
}



            const readLetter1 = () => {
                p1.word1 += fourBy4.letter1; 
            }
            const readLetter2 = () => {
                p1.word1 += fourBy4.letter2; 
            }
            const readLetter3 = () => {
                p1.word1 += fourBy4.letter3; 
            }







// 561 letters in letterFreak 

//https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html

// based on letter frequency of main word entries in Concise Oxford Dictionary (9th edition, 1995)

// explanation: a frequency of 1 for q is the baseline, which gives a frequency of 56.88 for the letter e (rounded up to 57 for this frequency distribution) 

const letterFreak = ["q","j","z","x",

"v","v","v","v","v","k","k","k","k","k","k",

"w","w","w","w","w","w","w",

"y","y","y","y","y","y","y","y","y",

"f","f","f","f","f","f","f","f","f",

"b","b","b","b","b","b","b","b","b","b","b",

"g","g","g","g","g","g","g","g","g","g","g","g","g",

"h","h","h","h","h","h","h","h","h","h","h","h","h","h","h",

"m","m","m","m","m","m","m","m","m","m","m","m","m","m","m",

"p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p",

"d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d",

"u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u",

"c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c",

"l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l",

"s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s",

"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",

"t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t",

"o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",

"i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",

"r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r",

"a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",

"e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e"]

// 561 letters in letterFreak 
// convert letterFreak from array to string
const printALetter = letterFreak.join("")

// get a letter from printALetter string
function genRanLet() {
    return printALetter[Math.floor(Math.random() * printALetter.length)]
}

// capitalize and make Q into Qu
const fixQ = () => {
    let genRanLetFixQ = genRanLet().toUpperCase()
    if (genRanLetFixQ == "Q"){
        genRanLetFixQ = "Qu"
    }
    return genRanLetFixQ
}


