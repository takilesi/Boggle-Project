// input player names

const player = {
    player1: "", 
    player2: ""
}; 

// game's letter object: gets popuated by the roll() function
// 
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
//
const p1 = {
    // word1: [""],
    // word2: [""],
    // word3: [""],
    // word4: [""],
    // word5: [""],
    // word6: [""],
    // word7: [""],
    // word8: [""],
    // word9: [""],
    // word10: [""]
}; 

const p2 = {
    // word1: [""],
    // word2: [""],
    // word3: [""],
    // word4: [""],
    // word5: [""],
    // word6: [""],
    // word7: [""],
    // word8: [""],
    // word9: [""],
    // word10: [""]
}; 

// use roll() to create 16 weighted random letters for the 4x4 gameboard matrix and the fourBy4 js object
//
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

const resetTempWord = () => {
    tempWord = ""; 
}

// this test function displays the contents of fourBy4 object on screen
//
const test1 = () => {
    let t = document.querySelector(".test1"); 
    if (t.innerHTML=="look at letter object"){
        t.innerHTML += JSON.stringify(fourBy4); 
    } else {
        t.innerHTML="look at letter object"; 
    }
    
}

const test2 = () => {
    let t = document.querySelector(".test2"); 
    if (t.innerHTML=="p1 word list check"){
        t.innerHTML += JSON.stringify(p1); 
    } else {
        t.innerHTML="p1 word list check"; 
    }
}

const test3 = () => {
    let t = document.querySelector(".test3"); 
    if (t.innerHTML=="p2 word list check"){
        t.innerHTML += JSON.stringify(p2);
    } else {
        t.innerHTML="p2 word list check"; 
    }  
}

const test4 = () => {
    let t = document.querySelector(".test4"); 
    if (t.innerHTML=="temp word check"){
        t.innerHTML += ": " + tempWord;
    } else {
        t.innerHTML="temp word check"; 
    }  
}

// the following functions take a single letter 
// from the fourBy4 object and create a string 
// of letters in tempword
//
let tempWord = ""; 

const let1 = () => { tempWord += fourBy4.letter1; }
const let2 = () => { tempWord += fourBy4.letter2; }
const let3 = () => { tempWord += fourBy4.letter3; }
const let4 = () => { tempWord += fourBy4.letter4; }
const let5 = () => { tempWord += fourBy4.letter5; }
const let6 = () => { tempWord += fourBy4.letter6; }
const let7 = () => { tempWord += fourBy4.letter7; }
const let8 = () => { tempWord += fourBy4.letter8; }
const let9 = () => { tempWord += fourBy4.letter9; }
const let10 = () => { tempWord += fourBy4.letter10; }
const let11 = () => { tempWord += fourBy4.letter11; }
const let12 = () => { tempWord += fourBy4.letter12; }
const let13 = () => { tempWord += fourBy4.letter13; }
const let14 = () => { tempWord += fourBy4.letter14; }
const let15 = () => { tempWord += fourBy4.letter15; }
const let16 = () => { tempWord += fourBy4.letter16; }

const word1 = () => {
    let str = "Word 1:  "; 
    let w = document.getElementById("w1");
    w.innerHTML = str; 
    w.innerHTML += tempWord; 
    p1.word1 = tempWord; 
    tempWord = ""; 
}

const word2 = () => {
    let str = "Word 2:  ";
    let w = document.getElementById("w2");
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word1 = tempWord; 
    tempWord = ""; 
}

const word3 = () => {
    let str = "Word 3:  "; 
    let w = document.getElementById("w3"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word2 = tempWord; 
    tempWord = ""; 
}

const word4 = () => {
    let str = "Word 4:  ";
    let w = document.getElementById("w4"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word2 = tempWord; 
    tempWord = ""; 
}

const word5 = () => {
    let str = "Word 5:  ";
    let w = document.getElementById("w5"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word3 = tempWord; 
    tempWord = ""; 
}

const word6 = () => {
    let str = "Word 6:  ";
    let w = document.getElementById("w6"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word3 = tempWord; 
    tempWord = ""; 
}

const word7 = () => {
    let str = "Word 7:  ";
    let w = document.getElementById("w7"); 
    w.innerHTML = str;
    w.innerHTML += tempWord;
    p1.word4 = tempWord;  
    tempWord = ""; 
}

const word8 = () => {
    let str = "Word 8:  ";
    let w = document.getElementById("w8"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word4 = tempWord; 
    tempWord = ""; 
}

const word9 = () => {
    let str = "Word 9:  ";
    let w = document.getElementById("w9"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word5 = tempWord; 
    tempWord = ""; 
}

const word10 = () => {
    let str = "Word 10:  ";
    let w = document.getElementById("w10"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word5 = tempWord; 
    tempWord = ""; 
}

//  second half of words

const word11 = () => {
    let str = "Word 11;  ";
    let w = document.getElementById("w11"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word6 = tempWord; 
    tempWord = ""; 
}

const word12 = () => {
    let str = "Word 12;  ";
    let w = document.getElementById("w12")
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word6 = tempWord; 
    tempWord = ""; 
}

const word13 = () => {
    let str = "Word 13;  ";
    let w = document.getElementById("w13")
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word7 = tempWord; 
    tempWord = ""; 
}

const word14 = () => {
    let str = "Word 14;  ";
    let w = document.getElementById("w14"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word7 = tempWord; 
    tempWord = ""; 
}

const word15 = () => {
    let str = "Word 15;  ";
    let w = document.getElementById("w15"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word8 = tempWord; 
    tempWord = ""; 
}

const word16 = () => {
    let str = "Word 16;  ";
    let w = document.getElementById("w16"); 
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word8 = tempWord; 
    tempWord = ""; 
}

const word17 = () => {
    let str = "Word 17;  ";
    let w = document.getElementById("w17");
    w.innerHTML = str;
    w.innerHTML += tempWord;
    p1.word9 = tempWord;  
    tempWord = ""; 
}

const word18 = () => {
    let str = "Word 18;  ";
    let w = document.getElementById("w18");
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word9 = tempWord; 
    tempWord = ""; 
}

const word19 = () => {
    let str = "Word 19;  ";
    let w = document.getElementById("w19");
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p1.word10 = tempWord; 
    tempWord = ""; 
}

const word20 = () => {
    let str = "Word 20;  ";
    let w = document.getElementById("w20")
    w.innerHTML = str;
    w.innerHTML += tempWord; 
    p2.word10 = tempWord; 
    tempWord = ""; 
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


