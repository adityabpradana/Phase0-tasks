
/*
======================
Highest Global Minimum
======================
Name :_____________
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- WAJIB menuliskan PSEUDOCODE. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

/*----------------------
Pseudocode
------------------------
READ and STORE firstArr, secondArr from parameter
STORE minFirstArr, minSecondArr
STORE highGlobal

FOR length of firstArr-1
  FOR length of Last Swapped Index-1 
    IF firstArr index j > firstArr index j+i
      SWAP firstArr index j with index j+1

FOR length of secondArr-1
  FOR length of Last Swapped Index-1 
    IF secondtArr index j > secondArr index j+i
      SWAP secondArr index j with index j+1

STORE minFirstArr with firstArr index 0
STORE minSecondArr with secondArr index 

IF minFirstArr > minSecondArr
  STORE highGlobal with minFirstArr
ELSE
  STORE highGlobal with minSecondArr

*/

function highestGlobalMinimum(firstArr, secondArr) {
  var minFirstArr, minSecondArr;
  var highGlobal;
  var temp;
  
  for(var i = 0; i < firstArr.length - 1; i++) {
    for(var j = 0; j < firstArr.length - i - 1; j++) {
      if ( firstArr[j] > firstArr[j+1] ) {
        temp = firstArr[j]
        firstArr[j] = firstArr[j+1]
        firstArr[j+1] = temp;
      }
    }
  }
  
  minFirstArr = firstArr[0];

  for(var i = 0; i < secondArr.length - 1; i++) {
    for(var j = 0; j < secondArr.length - i - 1; j++) {
      if ( secondArr[j] > secondArr[j+1] ) {
        temp = secondArr[j]
        secondArr[j] = secondArr[j+1]
        secondArr[j+1] = temp;
      }
    }
  }
  
  minSecondArr = secondArr[0];

  if(minFirstArr > minSecondArr){
    highGlobal = minFirstArr;
  } else {
    highGlobal = minSecondArr;
  }

  return highGlobal;
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5