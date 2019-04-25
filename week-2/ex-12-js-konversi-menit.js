console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

function konversiMenit(menit) {
    var menitBaru, jam, waktu;

    jam = Math.floor(menit/60);
    menitBaru = menit%60;
    
    if (menitBaru < 10){
        menitBaru = "0" + menitBaru; 
    }

    waktu = jam + ":" + menitBaru
    return waktu;
}

