//---1. Let's Form a Sentence---//

var first = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(first+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh);
console.log()

//---2. Index Accessing - 1 by 1---//

var word = 'wow JavaScript is so cool';
var exampleFirstWord2 = word[0] + word[1] + word[2];
var secondWord2 =  (word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + 
                    word[10] + word[11] + word[12] + word[13]);
var thirdWord2 =  word[15] + word[16];
var fourthWord2 = word[18] + word[19];
var fifthWord2 =  word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log()


//---3. Breaking Sentence (Again) using Substring---//

var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4,14);
var thirdWord3 = word.substring(15,17); 
var fourthWord3 = word.substring(18,20);
var fifthWord3 = word.substring(21,25); 

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
console.log()

//---4. Breaking Sentence (yet Again) and Count Each Length---///

var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4,14);
var thirdWord4 = word.substring(15,17); 
var fourthWord4 = word.substring(18,20);
var fifthWord4 = word.substring(21,25); 

var firstWordLength = exampleFirstWord4.length;
// create new variables around here
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);