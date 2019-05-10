function digitPerkalianMinimum(angka) {
    var arrPerkalian = [];
    var arrHasil = [];
    
        for(var i=angka; i>0; i--) {
            if(angka % i === 0) {
                arrPerkalian.push([angka/i,i])
            }
        }

        //console.log(arrPerkalian.length)

        for(var i=0; i<arrPerkalian.length; i++) {
           arrHasil.push(String(arrPerkalian[i][0]).length + String(arrPerkalian[i][1]).length)
        }

    bubbleSort(arrHasil);

    return arrHasil[0];
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2




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