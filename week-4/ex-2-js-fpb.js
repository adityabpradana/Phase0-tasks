function fpb(angka1, angka2) {
    var output = 1;
    var pembagi;

    while(angka1 % 2 === 0 && angka2 % 2 === 0) {
        angka1 = angka1 / 2;
        angka2 = angka2 / 2;
        output = output*2;
    }

    if(angka1 <= angka2) {
        pembagi = angka1;
    } else {
        pembagi = angka2;
    }

    for(i = pembagi; i > 2; i--) {
        if ((angka1 % i === 0) && (angka2 % i === 0)) {
            output = output*i;
            break;
        }
    }
    return output;

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1