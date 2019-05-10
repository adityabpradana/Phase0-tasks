function urutkanAbjad(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var arrUrutan = [];
    var strOutput = "";
    
    for(i=0; i<str.length; i++){
        arrUrutan.push(alphabet.indexOf(str[i]));
    }

    bubbleSort(arrUrutan);

    for(i=0; i<arrUrutan.length; i++){
        strOutput += alphabet[arrUrutan[i]];
    }


    return strOutput;
  }

  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'


  function bubbleSort(arr) {
    var temp;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < arr.length; i++) {
            if ( arr[i] > arr[i+1] ) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  }