function angkaPrima(angka) {
  pembagi = angka-1;
  logic = true;
  
  while (pembagi > 1) {
      if (angka % pembagi === 0) {
        logic = false;
        break;
      }
    pembagi--;
  }

  return logic;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false