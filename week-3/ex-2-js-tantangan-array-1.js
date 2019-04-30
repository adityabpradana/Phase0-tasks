function balikString(str){
    var balik = "";
    var loop = str.length-1;

    for(i=loop; i>=0; i--){
        balik = balik + str[i];
    }

    return balik;
}

console.log(balikString("hello world!"));
