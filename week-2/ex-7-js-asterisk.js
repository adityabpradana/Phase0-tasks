//Global Variable
var i,j;
var asterisk;
var rows1,rows2,rows3;

//---1. Menyusun Barisan Bintang---//

rows1 = 5; //input jumlah baris

for(i=1; i<=rows1; i++){
    console.log("*");
}
console.log();

//---2. Menyusun Barisan Bintang dengan Nested Looping---//

rows2 = 5; //input jumlah baris

for(i=1; i<= rows2; i++){
    asterisk="";
    for(k=1; k<= rows2; k++){
        asterisk = asterisk + "*"
    }
    console.log(asterisk);
}
console.log();

//---3. Menyusun Barisan Tangga Bintang dengan Nested Looping---//

rows3 = 5; //input jumlah baris

asterisk = "";

for(i=1; i<= rows3; i++){
    asterisk = asterisk + "*";
    console.log(asterisk);
}
