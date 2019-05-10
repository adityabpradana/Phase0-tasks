function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var awal, akhir;
    var arrObj = [];


    for(i=0; i<arrPenumpang.length; i++){
        arrObj.push({});
        arrObj[i].penumpang = arrPenumpang[i][0];
        arrObj[i].naikDari = arrPenumpang[i][1];
        arrObj[i].tujuan = arrPenumpang[i][2];

        akhir = rute.indexOf(arrPenumpang[i][2])
        awal = rute.indexOf(arrPenumpang[i][1])
        arrObj[i].bayar = (akhir - awal)*2000;
    }

    return arrObj;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]