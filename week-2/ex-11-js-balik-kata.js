console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

function balikKata (kata){

    var i;
    var jumlahKata;
    var kataTerbalik = "";

    jumlahKata = kata.length;
    for(i=jumlahKata; i>0; i--){
        kataTerbalik = kataTerbalik + kata[i-1];
    }
    return kataTerbalik;
}