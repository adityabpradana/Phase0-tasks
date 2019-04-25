//Deklarasi variabel
var nama = "Aditya";
var peran = "Penyihir"; 

    /*  
    Terdapat tiga peran yang dapat dipilih (case-sensitive)
    1. Ksatria
    2. Tabib
    3. Penyihir    
    */

//Kondisional if
if (nama != ""){
    if(peran == ""){
        console.log("Halo",nama,", Pilih peranmu untuk memulai game!")
    }
    else if(peran == "Ksatria"){
        console.log("Selamat datang di Dunia Proxytia,",nama);
        console.log("Halo",peran," ",nama,
        ", kamu dapat menyerang dengan senjatamu!");
    }
    else if(peran == "Tabib"){
        console.log("Selamat datang di Dunia Proxytia, ",nama);
        console.log("Halo",peran," ",nama,
        ", kamu akan membantu temanmu yang terluka.");
    }
    else if(peran == "Penyihir"){
        console.log("Selamat datang di Dunia Proxytia, ",nama);
        console.log("Halo",peran," ",nama,
        ", ciptakan keajaiban yang membantu kemenanganmu!");
    }
    else{
        console.log("Halo, ",nama," Peran yang dipilih tidak tersedia.",
        "\nSilahkan pilih peran yang tersedia!",
        "\n1. Ksatria  2. Tabib  3. Penyihir");
    }
}
else {
    console.log("Nama harus diisi!")
}