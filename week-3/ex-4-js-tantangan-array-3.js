var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
var input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    var input2 = input;

    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    tanggalLahir = input[3].split("/");
    bulan = (tanggalLahir)[1];
    switch(bulan){    
    case "01":
        bulan = "Januari";
        break;
    case "02":
        bulan = "Februari";
        break;
    case "03":
        bulan = "Maret";
        break;
    case "04":
        bulan = "April";
        break;
    case "05":
        bulan = "Mei";
        break;
    case "06":
        bulan = "Juni";
        break;
    case "07":
        bulan = "Juli";
        break;
    case "08":
        bulan = "Agustus";
        break;
    case "09":
        bulan = "September";
        break;
    case "10":
        bulan = "Oktober";
        break;
    case "11":
        bulan = "November";
        break;
    case "12":
        bulan = "Desember";
        break;
    }
    console.log(bulan);

    var tanggalBaru = input2[3].split("/");


    for(i=0; i < tanggalBaru.length; i++) {
        tanggalBaru[i] = Number(tanggalBaru[i]);
    }    

    console.log(tanggalBaru.sort(function(a,b) {return a < b})); //Masih tidak tepat (butuh perbaikan)

    console.log(tanggalLahir.join("-"))

    nama = input[1].slice(0,15);
    console.log(nama);
}

dataHandling2(input);