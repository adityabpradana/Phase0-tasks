function totalDigitRekursif(angka) {
    var i = 0;
    var output = 0;
    var num = String(angka);
    

    if(angka <= 0) {
        return output
    } else {
        return output+= Number(num[i]) + totalDigitRekursif(angka-Number(num[i]*10**(num.length-i-1)))
    }    
  }

  //Number(num[i]*10**(num.length-i-1)) = Digit Terbesar misal 512 nilainya 500, 12 nilainya 10, 2 nilainya 2

  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5