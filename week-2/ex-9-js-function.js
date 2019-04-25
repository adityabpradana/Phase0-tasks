//---Tugas 1---//

console.log(shoutOut()) 

function shoutOut(){
    return "Halo Function"
}
console.log();

//---Tugas 2---//

var num1 = 5;
var num2 = 6;
var hasilPerkalian;

hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

function calculateMultiply(num1,num2){
    hasilPerkalian = num1*num2;
    return hasilPerkalian;
}
console.log();

//--Tugas 3--//

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 

function processSentence(name,age,address,hobby){
    fullSentence = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di "
                    + address + ", dan saya punya hobby yaitu " + hobby +"!";
    return fullSentence;
}



