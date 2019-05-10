function targetTerdekat(arr) {
    output = [];
    posisiO = [];
    posisiX = [];
    jarak = [];

    //Mencari Posisi "o" dan "x"
    for(i=0; i<arr.length; i++) {
        if(arr[i] === "o") {
            posisiO.push(i);
        }   
    }

    for(j=0; j<arr.length; j++) {
        if(arr[j] === "x") {
            posisiX.push(j);
        }   
    }

    //Mencari seluruh jarak
    for(i=0; i<posisiO.length; i++){
        for(j=0; j<posisiX.length; j++){
            if(posisiO[i]<posisiX[j]) {
                jarak.push(posisiX[j] - posisiO[i]);
            } else {
                jarak.push(posisiO[i] - posisiX[j]);
            }
            
        }
    }

    //Mengurutkan jarak dari yg terdekat
    jarak.sort();

    return jarak[0];
    }

    

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2