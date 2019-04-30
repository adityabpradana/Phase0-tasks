/*
=============
Number Ladder
=============

[INSTRUCTIONS]
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height. 
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
1
12
123
contoh 2 (height = 5):
1
12
123
1234
12345
 
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

[RULES]
 - Wajib menggunakan looping!
*/

function numberLadder(num) {
 
  var i;
  var j;
  var tangga ="";

  for(i=1; i<=num; i++){  
    for(j=1; j<=i; j++){
      tangga = tangga + j;
      }
      if(i!=num){
        tangga = tangga + "\n"
    }
    
  }
  
  return tangga;
  }

   

console.log(numberLadder(3));
/*
1
12
123
*/

console.log(numberLadder(4));
/*
1
12
123
1234
*/

console.log(numberLadder(1));
/*
1
*/