function pasanganTerbesar(num) {
    strNum = String(num);
    arr = [];

    for(i=0; i<strNum.length-1; i++) {
        arr.push(strNum[i]+strNum[i+1]);
        arr.sort();
    }
    
    return Number(arr.pop());
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99