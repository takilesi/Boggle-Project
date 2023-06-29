// let Typo = require('typo-js-ts').Typo;
 
// new Typo("en_US")
//   .ready.then(dictionary => {
//     // Promise that dictionary is loaded
//     // do worl
//     // test if mispelled is the corect spelling for en_US
//     console.log(dictionary.check("etiquette"));
//   })
//   .catch((error) => {
//     // dictionary was not loaded
//     console.error(error);
//   });




// let arr =[]
// arr[1]=1
// arr[2]=2
// arr[3]=3
// arr[5]=5

// leftTally  = 0; 
// rightTally = 0; 
// for (let i=1; i<=10; i++){
//   if (i%2 == 0){
//     if (arr[i]===undefined){
//       arr[i]=0
//     }
//     rightTally += arr[i];
//   } else {
//     if (arr[i]===undefined){
//       arr[i]=0
//     }
//     leftTally += arr[i];
//   }
// }
// console.log(rightTally); 
// console.log(leftTally); 


 
// this code successfully uses the Type function from above in node environment 

// let testVar = "Word 1:      4 pts"; 
// let test2 =0; 
// if (testVar.includes("-")===true){
//     let newTestVar = testVar.split("-"); 
//     let desired = newTestVar[1]; 
//     let test = desired.match(/(\d+)/); 
//     test2 = test[0]; 
// } else {
//   test2 = 0; 
// }


// console.log(test2);



const words1 = "come, get, give, go, keep, let, make, put"; 

let wordArray = words1.split(", "); 

console.log(wordArray); 

let tempWord = "fart"; 

// for (i=0; i<wordArray.length; i++) {
//   // console.log(wordArray[i]); 
//   if (wordArray[i]==verifyWord){
//     console.log("true")
//   } else { 
//     console.log("false"); 
//   }
// }

let check = wordArray.includes(tempWord); 
console.log(check); 