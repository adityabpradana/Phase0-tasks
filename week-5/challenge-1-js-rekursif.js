// // Wajib menggunakan rekursif
// // CHALLENGE
// // RELEASE 1

// function FPB(number1, number2) {
//     // code below here...
//   };
  
  
//   // RELEASE 2
  
//   function KPK(number1, number2) {
//     // code below here...
//   };
  
//   console.log(KPK(3, 4))//12
//   console.log(KPK(2, 35))//70
  
//   // RELEASE 3
  
  // menghitung jam, menit, detik
  function countingTime(seconds) {
    var jam = 0;
    var menit = 0;
    var detik = seconds;
    var str = "";

    str = str + hitungJam(seconds)
    str = str + hitungMenit(seconds)

    return str;
  }

  console.log(countingTime(60))

  function hitungJam(seconds) {
      if(seconds >=3600) {
        jam++
        detik = detik - 3600
        return hitungJam(seconds-3600)
      } else {
        return jam + " jam,"
      }
  }

  function hitungMenit(seconds) {
      if(seconds >=60) {
        menit++
        detik = detik - 60
        return hitungMenit(seconds-60)
      } else {
        return " " + menit + " menit,"
      }
  }