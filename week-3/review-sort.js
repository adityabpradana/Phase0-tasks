var arr = ['a','b','d','f','g','u','t','d','s','g','c','e','t','h','d','a','s','f'];

function sorting(arrayUnsorted) {
    var i = 0;
    var temp;
    while(i<arrayUnsorted.length-1) {
        if(arrayUnsorted[i] < arrayUnsorted[i+1]){
            temp = arrayUnsorted[i];
            arrayUnsorted[i] = arrayUnsorted[i+1];
            arrayUnsorted[i+1] = temp;
        } else {
            i++;
        }
    }
return arrayUnsorted;
}

console.log(sorting(arr));

//array kosong -> array.length === 0