/*
============================
FIND AND COUNT VOCAL LETTER
============================

[INSTRUCTION]
Terdapat function findAndCountVocal yang menerima 1 parameter berupa string. Function akan mengembalikan
nilai berupa jumlah masing - masing huruf vocal pada sebuah kalimat.

[EXAMPLES]
input : 'Makan ayam, bebek, ikan, udang'
output: 'Terdapat 6 huruf a, 1 huruf i, 1 huruf u, 2 huruf e, dan 0 huruf o'

input: 'dfghdfgdfg'
output: 'Terdapat 0 huruf a, 0 huruf i, 0 huruf u, 0 huruf e, dan 0 huruf o'

input: 'ooo seram'
output: 'Terdapat 1 huruf a, 0 huruf i, 0 huruf u, 1 huruf e, dan 3 huruf o'

[RULES]
- Hanya boleh menggunakan looping for/while dan conditional untuk pengerjaan soal

*/

function findAndCountVocal(str) {
  var i;
  var jumlahA = 0;
  var jumlahI = 0;
  var jumlahU = 0;
  var jumlahE = 0;
  var jumlahO = 0;

  console.log(str.length)

  for(i=0; i<str.length; i++){
    switch(str[i]){
      case "a":
        jumlahA = jumlahA + 1;
        break;
      case "i":
        jumlahI = jumlahI + 1;
        break;
      case "u":
        jumlahU++;
        break;
      case "e":
        jumlahE++;
        break;
      case "o":
        jumlahO++;
        break;
      default:
        break;
    }
  }
  
  return "Terdapat " + jumlahA + " huruf a, " + jumlahI + " huruf i, " + jumlahU + " huruf u, " + jumlahE +" huruf e, dan " + jumlahO +" huruf o"
}

console.log(findAndCountVocal('Makan ayam, bebek, ikan, udang'));
// 'Terdapat 6 huruf a, 1 huruf i, 1 huruf u, 2 huruf e, dan 0 huruf o'
console.log(findAndCountVocal('dfghdfgdfg'));
// 'Terdapat 0 huruf a, 0 huruf i, 0 huruf u, 0 huruf e, dan 0 huruf o'
console.log(findAndCountVocal('ooo seram'));
// 'Terdapat 1 huruf a, 0 huruf i, 0 huruf u, 1 huruf e, dan 3 huruf o'