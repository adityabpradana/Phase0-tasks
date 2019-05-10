
/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/*
  Pseudocode

  STORE i with 0;
  STORE outputOdd with "" (empty string)
  STORE outputEven with "" (empty string)

  FOR i < students.length, i INCREMENTAL
    IF students index i MOD 2 equal to 0
      IF first number
        ADD output with "ODD: students at index i"
      ELSE
        ADD output with ", students at index i"
    ELSE
      IF first number
        ADD output with "ODD: students at index i"
      ELSE
        ADD output with ", students at index i"


  DISPLAY 

*/



function groupOddEven(students) {
  var outputOdd = "";
  var outputEven = "";
  
  for (var i = 0; i < students.length; i++) {
    if (students[i] % 2 === 0){
      if (outputOdd.indexOf("EVEN") === -1) {
        outputOdd += "EVENS: " + students[i] + " ";
      } else {
        outputOdd += "," + students[i] + " ";
      }
      
    } else {
      if (outputEven.indexOf("ODD") === -1) {
        outputEven += "ODDS: " + students[i] + " ";
      } else {
        outputEven += "," + students[i] + " ";
      }
    }
  }

  return outputEven + outputOdd;
}
  
// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"