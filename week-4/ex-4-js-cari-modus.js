function cariModus(arr) {
    var nilai = [];
    var cekJumlah = [];
    var jumlah = [];
    var output;

    for(var i = 0; i < arr.length; i++) {
        cekPosisi = nilai.indexOf(arr[i])
        
        if( cekPosisi === -1) {
            nilai.push(arr[i]);
            cekJumlah.push([arr[i]]);
        } else {
            cekJumlah[cekPosisi].push(arr[i])
        }
    }

    for(var i = 0; i < cekJumlah.length; i++){
        jumlah.push([cekJumlah[i].length]);
    }

    for(var i = 0; i < jumlah.length; i++) {
        jumlah[i].push(nilai[i]);
    }

    bubbleSortReverse(jumlah);

    output = jumlah[0][1]

    if(jumlah.length === 1){
        output = -1;
    } else if (jumlah[0][0] === 1) {
        output = -1;
    }
    

    return output;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  function bubbleSortReverse(arr) {
    var temp;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < arr.length; i++) {
            if ( arr[i] < arr[i+1] ) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}