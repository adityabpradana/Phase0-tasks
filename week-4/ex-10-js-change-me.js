function changeMe(arr) {
    var arrOfStr = "";
    var obj = {};

    for(var i=0; i<arr.length; i++) {
        arrOfStr = (i+1+". "+arr[i][0]+" "+arr[i][1]+":");
        
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        obj.age = hitungUmur(arr[i][3]);

        console.log(arrOfStr);
        console.log(obj);     

    }
}
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }

  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""


  function hitungUmur(tahun) {
    if(tahun <= 2019) {
        var umur = 2019-tahun;
    } else {
        var umur = "Invalid Birth Year"
    }

    return umur;
  }