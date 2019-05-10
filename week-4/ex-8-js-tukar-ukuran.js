function tukarBesarKecil(kalimat) {
    var alphabetLibrary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var wordSwitch = "";
   
    for(i = 0; i < kalimat.length; i++){
        j = alphabetLibrary.indexOf(kalimat[i]);

        if (j > 25) {
        j = j - 26;
		wordSwitch += alphabetLibrary[j];
        } else if (j < 26 && j >= 0) {
        j = j + 26;
		wordSwitch += alphabetLibrary[j];
        } else {
		wordSwitch += kalimat[i];
		}
    
    
    }

    return wordSwitch;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"