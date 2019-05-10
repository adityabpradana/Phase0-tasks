function ubahHuruf(kata) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var kataBaru = "";

    for ( var i = 0; i < kata.length; i++ ) {
        nomorHuruf = alphabet.indexOf(kata[i])

        if (nomorHuruf === 25) { //Kalau huruf z maka akan dikembalikan ke a
            nomorHuruf = -1;
            kataBaru += alphabet[nomorHuruf + 1]; 
        } else if (nomorHuruf === -1) { //Apabila bukan alphabet maka output sama dengan input
            kataBaru += kata[i];
        } else {
            kataBaru += alphabet[nomorHuruf + 1];
        }


    }

    return kataBaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu