//Global Variable
var i,j,k;

//---1. While Loop---// 

i = 2;

console.log("LOOPING PERTAMA")
while (i <= 20) {
    console.log(i," - I love coding");
    i += 2;
}

i = 20;

console.log("LOOPING KEDUA")
while (i >= 2) {
    console.log(i," - I will become fullstack developer");
    i -= 2;
}
console.log();

//---2. For Loop---// 

console.log("LOOPING PERTAMA");
for (j=1; j<=20; j++) {
    console.log(j," - I love coding");
}

console.log("LOOPING KEDUA");
for (j=20; j>=1; j--) {
    console.log(j," - I will become fullstack developer");
}
console.log();

//---3. Angka Ganjil Genap---//
for (k=1; k<=100; k++) {
    if (k % 2 != 0) {
        console.log("GANJIL");
    }
    else {
        console.log("GENAP");
    }
}
console.log();

for (k=1; k<=100; k+=2) {
    if (k % 3 == 0) {
        console.log(k, " kelipatan 3");
    }
    else{
        console.log("");   
    }
}
console.log();

for (k=1; k<=100; k+=5) {
    if (k % 6 == 0) {
        console.log(k, " kelipatan 6");
    }
    else{
        console.log("");   
    }
}
console.log();

for (k=1; k<=100; k+=9) {
    if (k % 10 == 0) {
        console.log(k, " kelipatan 10");
    }
    else{
        console.log("");   
    }
}
