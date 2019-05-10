function checkAB(str) {
    output = false;
    posisiA = [];
    posisiB = [];
    jarak = [];

    //Mencari posisi komponen "a" dan "b"
    for(var i = 0; i < str.length; i++) {
        if(str[i] === "a") {
            posisiA.push(i);
        }
    }

    for(var i = 0; i < str.length; i++) {
        if(str[i] === "b") {
            posisiB.push(i);
        }
    }

    //Mencari seluruh jarak
    for(var i=0; i<posisiA.length; i++){
        for(var j=0; j<posisiB.length; j++){
            if(posisiA[i]<posisiB[j]) {
                jarak.push(posisiB[j] - posisiA[i]);
            } else {
                jarak.push(posisiA[i] - posisiB[j]);
            }
            
        }
    }

    for(var i = 0; i<jarak.length; i++) {
        if(jarak[i] === 4){
            output = true;
            break
        }
    }

    return output;

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false