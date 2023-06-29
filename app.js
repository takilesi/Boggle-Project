// 850 word dictionary in 3 variables 
//
const words1 = "come, get, give, go, keep, let, make, put, seem, take, be, do, have, say, see, send, may, will, about, across, after, against, among, at, before, between, by, down, from, in, off, on, over, through, to, under, up, with, as, for, of, till, than, a, the, all, any, every, no, other, some, such, that, this, I, he, you, who, and, because, but, or, if, though, while, how, when, where, why, again, ever, far, forward, here, near, now, out, still, then, there, together, well, almost, enough, even, little, much, not, only, quite, so, very, tomorrow, yesterday, north, south, east, west, please, yes, account, act, addition, adjustment, advertisement, agreement, air, amount, amusement, animal, answer, apparatus, approval, argument, art, attack, attempt, attention, attraction, authority, back, balance, base, behaviour, belief, birth, bit, bite, blood, blow, body, brass, bread, breath, brother, building, burn, burst, business, butter, canvas, care, cause, chalk, chance, change, cloth, coal, colour, comfort, committee, company, comparison, competition, condition, connection, control, cook, copper, copy, cork, cotton, cough, country, cover, crack, credit, crime, crush, cry, current, curve, damage, danger, daughter, day, death, debt, decision, degree, design, desire, destruction, detail, development, digestion, direction, discovery, discussion, disease, disgust, distance, distribution, division, doubt, drink, driving, dust, earth, edge, education, effect, end, error, event, example, exchange, existence, expansion, experience, expert, fact, fall, family, father, fear, feeling, fiction, field, fight, fire, flame, flight, flower, fold, food, force, form, friend, front, fruit, glass, gold, government, grain, grass, grip, group, growth, guide, harbour, harmony, hate, hearing, heat, help, history, hole, hope, hour, humour, ice, idea, impulse, increase, industry, ink, insect, instrument, insurance, interest, invention, iron, jelly, join, journey, judge, jump, kick, kiss, knowledge, land, language, laugh, law, lead, learning, leather, letter, level, lift, light, limit, linen, liquid, list, look, loss, love, machine, man, manager, mark, market, mass, meal, measure, meat, meeting, memory, metal, middle, milk, mind, mine, minute, mist, money, month, morning,mother, motion, mountain, move, music, name, nation, need, news, night, noise, note, number, observation, offer, oil, operation, opinion, order";  

const words2 = "organization, ornament, owner, page, pain, paint, paper, part, paste, payment, peace, person, place, plant, play, pleasure, point, poison, polish, porter, position, powder, power, price, print, process, produce, profit, property, prose, protest, pull, punishment, purpose, push, quality, question, rain, range, rate, ray, reaction, reading, reason, record, regret, relation, religion, representative, request, respect, rest, reward, rhythm, rice, river, road, roll, room, rub, rule, run, salt, sand, scale, science, sea, seat, secretary, selection, self, sense, servant, sex, shade, shake, shame, shock, side, sign, silk, silver, sister, size, sky, sleep, slip, slope, smash, smell, smile, smoke, sneeze, snow, soap, society, son, song, sort, sound, soup, space, stage, start, statement, steam, steel, step, stitch, stone, stop, story, stretch, structure, substance, sugar, suggestion, summer, support, surprise, swim, system, talk, taste, tax, teaching, tendency, test, theory, thing, thought, thunder, time, tin, top, touch, trade, transport, trick, trouble, turn, twist, unit, use, value, verse, vessel, view, voice, walk, war, wash, waste, water, wave, wax, way, weather, week, weight, wind, wine, winter, woman, wood, wool, word, work, wound, writing, year, angle, ant, apple, arch, arm, army, baby, bag, ball, band, basin, basket, bath, bed, bee, bell, berry, bird, blade, board, boat, bone, book, boot, bottle, box, boy, brain, brake, branch, brick, bridge, brush, bucket, bulb, button, cake, camera, card, cart, carriage, cat, chain, cheese, chest, chin, church, circle, clock, cloud, coat, collar, comb, cord, cow, cup, curtain, cushion, dog, door, drain, drawer, dress, drop, ear, egg, engine, eye, face, farm, feather, finger, fish, flag, floor, fly, foot, fork, fowl, frame, garden, girl, glove";

const words3 = "goat, gun, hair, hammer, hand, hat, head, heart, hook, horn, horse, hospital, house, island, jewel, kettle, key, knee, knife, knot, leaf, leg, library, line, lip, lock, map, match, monkey, moon, mouth, muscle, nail, neck, needle, nerve, net, nose, nut, office, orange, oven, parcel, pen, pencil, picture, pig, pin, pipe, plane, plate, plough, pocket, pot, potato, prison, pump, rail, rat, receipt, ring, rod, roof, root, sail, school, scissors, screw, seed, sheep, shelf, ship, shirt, shoe, skin, skirt, snake, sock, spade, sponge, spoon, spring, square, stamp, star, station, stem, stick, stocking, stomach, store, street, sun, table, tail, thread, throat, thumb, ticket, toe, tongue, tooth, town, train, tray, tree, trousers, umbrella, wall, watch, wheel, whip, whistle, window, wing, wire, worm, able, acid, angry, automatic, beautiful, black, boiling, bright, broken, brown, cheap, chemical, chief, clean, clear, common, complex, conscious, cut, deep, dependent, early, elastic, electric, equal, fat, fertile, first, fixed, flat, free, frequent, full, general, good, great, grey, hanging, happy, hard, healthy, high, hollow, important, kind, like, living, long, male, married, material, medical, military, natural, necessary, new, normal, open, parallel, past, physical, political, poor, possible, present, private, probable, quick, quiet, ready, red, regular, responsible, right, round, same, second, separate, serious, sharp, smooth, sticky, stiff, straight, strong, sudden, sweet, tall, thick, tight, tired, true, violent, waiting, warm, wet, wide, wise, yellow, young, awake, bad, bent, bitter, blue, certain, cold, complete, cruel, dark, dead, dear, delicate, different, dirty, dry, false, feeble, female, foolish, future, green, ill, last, late, left, loose, loud, low, mixed, narrow, old, opposite, public, rough, sad, safe, secret, short, shut, simple, slow, small, soft, solid, special, strange, thin, white, wrong";

let words4 = "aba,abs,ace,act,add,ado,aft,age,ago,aha,aid,aim,air,ala,ale,all,alt,amp,ana,and,ant,any,ape,app,apt,arc,are,ark,arm,art,ash,ask,asp,ass,ate,ave,awe,axe,aye,BAA,bad,bag,ban,bar,bat,bay,bed,bee,beg,bel,ben,bet,bid,big,bin,bio,bis,bit,biz,bob,bog,boo,bow,box,boy,bra,bud,Bug,bum,bun,bus,but,buy,bye,cab,cad,cam,can,cap,car,cat,chi,cob,cod,col,con,coo,cop,cor,cos,cot,cow,cox,coy,cry,cub,cue,cum,cup,cut,dab,dad,dal,dam,dan,day,Dee,def,del,den,dew,did,die,dig,dim,din,dip,dis,doc,doe,dog,don,dot,dry,dub,due,dug,dun,duo,dye,ear,eat,ebb,ecu,eft,egg,ego,elf,elm,emu,end,era,eta,eve,eye,fab,fad,fan,far,fat,fax,fay,fed,fee,fen,few,fig,fin,fir,fit,fix,flu,fly,foe,fog,for,fox,fry,fun,fur,gag,gal,gap,gas,gay,gee,gel,gem,get,gig,gin,god,got,gum,gun,gut,guy,gym,had,ham,has,hat,hay,hem,hen,her,hey,hid,him,hip,his,hit,hog,hon,hop,hot,how,hub,hue,hug,huh,hum,hut,ice,icy,igg,ill,imp,ink,inn,ion,its,ivy,jam,jar,jaw,jay,jet,jew,job,joe,jog,joy,jug,jun,kay,ken,key,kid,kin,kit,lab,lac,lad,lag,lam,lap,law,lax,lay,lea,led,Lee,leg,les,let,lib,lid,lie,lip,lit,log,lot,low,mac,mad,mag,man,map,mar,mas,mat,max,may,med,meg,men,Met,mid,mil,mix,mob,mod,mol,mom,mon,mop,mot,mud,mug,mum,nab,nah,nan,nap,nay,neb,neg,net,new,nil,nip,nod,nor,nos,not,now,nun,nut,oak,odd,off,oft,oil,old,ole,one,ooh,opt,orb,ore,our,out,owe,owl,own,pac,pad,pal,pam,pan,pap,par,pas,pat,paw,pay,pea,peg,pen,pep,per,pet,pew,phi,pic,pie,pig,pin,pip,pit,ply,pod,pol,pop,pot,pro,psi,pub,pup,put,rad,rag,raj,ram,ran,rap,rat,raw,ray,red,ref,reg,rem,rep,rev,rib,rid,rig,rim,rip,rob,rod,roe,rot,row,rub,rue,rug,rum,run,rye,sab,sac,sad,sae,sag,sal,sap,sat,saw,say,sea,sec,see,sen,set,sew,sex,she,shy,sic,sim,sin,sip,sir,sis,sit,six,ski,sky,sly,sod,sol,son,sow,soy,spa,spy,sub,sue,sum,sun,sup,tab,tad,tag,tam,tan,tap,tar,tat,tax,tea,ted,tee,ten,the,thy,tie,tin,tip,tod,toe,tom,ton,too,top,tor,tot,tow,toy,try,tub,tug,two,use,van,vat,vet,via,vie,vow,wan,war,was,wax,way,web,wed,wee,wet,who,why,wig,win,wis,wit,won,woo,wow,wry,wye,yen,yep,yes,yet,you,zip,zoo"; 




// input player names

const player = {
    player1: "", 
    player2: ""
}; 

// spell check library, for future use... 

// const spellCheck = () => {
//     // let Typo = require('typo-js-ts').Typo;
    
//     new Typo("en_US")
//     .ready.then(dictionary => {
//         // Promise that dictionary is loaded
//         // do worl
//         // test if mispelled is the corect spelling for en_US
//         spelledRight = dictionary.check(tempWord);
//         if (spelledRight == false){
//             document.querySelector(".mispelled").innerHTML = tempWord + " is mispelled, try again!"; 
//         }
//     })
//     .catch((error) => {
//         // dictionary was not loaded
//         console.error(error);
//     });
// }

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

// let cat = document.getElementById("w1").innerHTML; 

// const startState = {
//     word1:  cat,
//     word2:  document.querySelector(".w2").innerHTML,
//     word3:  document.querySelector(".w3").innerHTML,
//     word4:  document.querySelector(".w4").innerHTML,
//     word5:  document.querySelector(".w5").innerHTML,
//     word6:  document.querySelector(".w6").innerHTML,
//     word7:  document.querySelector(".w7").innerHTML,
//     word8:  document.querySelector(".w8").innerHTML,
//     word9:  document.querySelector(".w9").innerHTML,
//     word10: document.querySelector(".w10").innerHTML, 
//     word11: document.querySelector(".w11").innerHTML,
//     word12: document.querySelector(".w12").innerHTML,
//     word13: document.querySelector(".w13").innerHTML,
//     word14: document.querySelector(".w14").innerHTML,
//     word15: document.querySelector(".w15").innerHTML,
//     word16: document.querySelector(".w16").innerHTML,
//     word17: document.querySelector(".w17").innerHTML,
//     word18: document.querySelector(".w18").innerHTML,
//     word19: document.querySelector(".w19").innerHTML,
//     word20: document.querySelector(".w20").innerHTML,
// }; 


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

// reset Player 1 and Player 2 to original state
// 
const resetScores = () => {
    for (i=1; i<21; i++){
        let arrayCount = `.wordCss[${i}]`; 
        let z = document.querySelectorAll(arrayCount).innerHTML; 
        z = z; 
    }
}

// allows you to start your word 
// over if you click wrong tile
//
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

// tally players scores (gn - getNum)
//  use odd and evens of id="w1"..."w20"
//

const tally = () => {
    leftTally  = 0; 
    rightTally = 0; 
    for (let i=1; i<=20; i++){
        let id = `w${i}`
         
        let strToParse = document.getElementById(id).innerHTML 
        let test2 = 0; 
        // check string, if - is present split and extract #
        // esle assign 0 
        if (strToParse.includes("-")===true){
            let newTestVar = strToParse.split("-"); 
            let desired = newTestVar[1]; 
            let test = desired.match(/(\d+)/); 
            test2 = parseInt(test[0]); 
        } else {
          test2 = 0; 
        }

        // use modulo to iterate through odds list / evens list
        if (i%2 == 0){
            rightTally += test2; 
        } else {
            leftTally += test2; 
        }
    }
    document.getElementById("cent1").innerHTML = "Player 1 score tally: " + leftTally; 
    document.getElementById("cent2").innerHTML = "Player 2 score tally: " + rightTally; 
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

// score each word 
//
const scoreWord = (tempWord) => {
    if (tempWord.length == 4 || tempWord.length == 3) {
        return 1; 
    } else if (tempWord.length == 5){
        return 2; 
    } else if (tempWord.length == 6){
        return 3; 
    } else if (tempWord.length == 7){
        return 5; 
    } else if (tempWord.length >= 8){
        return 11; 
    }
}


// const words1 = "set, get, bet, met, net, let, pet, vet, wet, yet"; 
// const words2 = "ban, can, fan, lan, man, pan, ran, tan, van"; 

let wordArray1 = words1.split(", "); 
let wordArray2 = words2.split(", "); 
let wordArray3 = words3.split(", "); 
let wordArray4 = words4.split(","); 

const spellCheck = (verifyWord) => {
    let verifyWordLowerCase = verifyWord.toLowerCase(); 
    let check1 = wordArray1.includes(verifyWordLowerCase); 
    let check2 = wordArray2.includes(verifyWordLowerCase);
    let check3 = wordArray3.includes(verifyWordLowerCase);
    let check4 = wordArray4.includes(verifyWordLowerCase);
    if (check1==true || check2==true || check3==true || check4==true){
        return verifyWord; 
    } else if(check1==false && check2==false && check3==false && check4==false){
        verifyWord = "not in 850-wrd-dict: try again"; 
        return verifyWord; 
    }
    
}


const word1 = () => {
     
    let str = "Word 1:  "; 
    let w = document.getElementById("w1");
    w.innerHTML = str; 

    w.innerHTML += spellCheck(tempWord) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word1 = tempWord; 
    tempWord = ""; 
}

const word2 = () => {
    let str = "Word 1:  ";
    let w = document.getElementById("w2");
    w.innerHTML = str;

    w.innerHTML += spellCheck(tempWord) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word1 = tempWord; 
    tempWord = ""; 
}

const word3 = () => {
    let str = "Word 2:  "; 
    let w = document.getElementById("w3"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word2 = tempWord; 
    tempWord = ""; 
}

const word4 = () => {
    let str = "Word 2:  ";
    let w = document.getElementById("w4"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word2 = tempWord; 
    tempWord = ""; 
}

const word5 = () => {
    let str = "Word 3:  ";
    let w = document.getElementById("w5"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word3 = tempWord; 
    tempWord = ""; 
}

const word6 = () => {
    let str = "Word 3:  ";
    let w = document.getElementById("w6"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word3 = tempWord; 
    tempWord = ""; 
}

const word7 = () => {
    let str = "Word 4:  ";
    let w = document.getElementById("w7"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts";
    p1.word4 = tempWord;  
    tempWord = ""; 
}

const word8 = () => {
    let str = "Word 4:  ";
    let w = document.getElementById("w8"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word4 = tempWord; 
    tempWord = ""; 
}

const word9 = () => {
    let str = "Word 5:  ";
    let w = document.getElementById("w9"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word5 = tempWord; 
    tempWord = ""; 
}

const word10 = () => {
    let str = "Word 5:  ";
    let w = document.getElementById("w10"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word5 = tempWord; 
    tempWord = ""; 
}

//  second half of words

const word11 = () => {
    let str = "Word 6:  ";
    let w = document.getElementById("w11"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word6 = tempWord; 
    tempWord = ""; 
}

const word12 = () => {
    let str = "Word 6:  ";
    let w = document.getElementById("w12")
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word6 = tempWord; 
    tempWord = ""; 
}

const word13 = () => {
    let str = "Word 7:  ";
    let w = document.getElementById("w13")
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word7 = tempWord; 
    tempWord = ""; 
}

const word14 = () => {
    let str = "Word 7:  ";
    let w = document.getElementById("w14"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word7 = tempWord; 
    tempWord = ""; 
}

const word15 = () => {
    let str = "Word 8:  ";
    let w = document.getElementById("w15"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word8 = tempWord; 
    tempWord = ""; 
}

const word16 = () => {
    let str = "Word 8:  ";
    let w = document.getElementById("w16"); 
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word8 = tempWord; 
    tempWord = ""; 
}

const word17 = () => {
    let str = "Word 9:  ";
    let w = document.getElementById("w17");
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts";
    p1.word9 = tempWord;  
    tempWord = ""; 
}

const word18 = () => {
    let str = "Word 9:  ";
    let w = document.getElementById("w18");
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p2.word9 = tempWord; 
    tempWord = ""; 
}

const word19 = () => {
    let str = "Word 10:  ";
    let w = document.getElementById("w19");
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
    p1.word10 = tempWord; 
    tempWord = ""; 
}

const word20 = () => {
    let str = "Word 10:  ";
    let w = document.getElementById("w20")
    w.innerHTML = str;
    w.innerHTML += tempWord + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;" + scoreWord(tempWord) + " pts"; 
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

// code borrowed from 
// Ha, I had to fill out the entire grid!!!
//https://stackoverflow.com/questions/72965791/how-to-check-in-a-css-grid-if-the-adjacent-cell-has-a-class
//

// const grid = [
//     // first row 
//     { 
//         adjacentCells: ['l2', 'l5', 'l6'],
//         cell: l1, //DOM element
//         id: 'l1',
//     },
//     {
//         adjacentCells: ['l1', 'l3', 'l5', 'l6', 'l7'],
//         cell: l2,
//         id: 'l2',
//     },
//     { 
//         adjacentCells: ['l2', 'l4', 'l6', 'l7', 'l8'],
//         cell: l3, //DOM element
//         id: 'l3',
//     },
//     {
//         adjacentCells: ['l3', 'l7', 'l8'],
//         cell: l4,
//         id: 'l4',
//     },
//     // second row 
//     { 
//         adjacentCells: ['l1', 'l2', 'l6', 'l9', 'l10'],
//         cell: l5, //DOM element
//         id: 'l5',
//     },
//     {
//         adjacentCells: ['l1', 'l2', 'l3', 'l5', 'l7', 'l9', 'l10', 'l11'],
//         cell: l6,
//         id: 'l6',
//     },
//     { 
//         adjacentCells: ['l2', 'l3', 'l4', 'l6', 'l8', 'l10', 'l11', 'l12'],
//         cell: l7, //DOM element
//         id: 'l7',
//     },
//     {
//         adjacentCells: ['l3', 'l4', 'l7', 'l11', 'l12'],
//         cell: l8,
//         id: 'l8',
//     },
//     // third row 
//     { 
//         adjacentCells: ['l5', 'l6', 'l10', 'l13', 'l14'],
//         cell: l9, //DOM element
//         id: 'l9',
//     },
//     {
//         adjacentCells: ['l5', 'l6', 'l7', 'l9', 'l11', 'l13', 'l14', 'l15'],
//         cell: l10,
//         id: 'l10',
//     },
//     { 
//         adjacentCells: ['l6', 'l7', 'l8', 'l10', 'l12', 'l14', 'l15', 'l16'],
//         cell: l11, //DOM element
//         id: 'l11',
//     },
//     {
//         adjacentCells: ['l7', 'l8', 'l11', 'l15', 'l16'],
//         cell: l12,
//         id: 'l12',
//     },
//     // fourth row 
//     { 
//         adjacentCells: ['l9', 'l10', 'l14'],
//         cell: l13, //DOM element
//         id: 'l13',
//     },
//     {
//         adjacentCells: ['l9', 'l10', 'l11', 'l13', 'l15'],
//         cell: l14,
//         id: 'l14',
//     },
//     { 
//         adjacentCells: ['l10', 'l11', 'l12', 'l14', 'l16'],
//         cell: l5, //DOM element
//         id: 'l5',
//     },
//     {
//         adjacentCells: ['l11', 'l12', 'l15'],
//         cell: l16,
//         id: 'l16',
//     },
//   ]






