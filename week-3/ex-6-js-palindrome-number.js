function angkaPalindrome(num) {
    num++
    var i = 0;

    while ( i<String(num).length ){
        if(String(num)[i]!==String(num)[String(num).length-i-1]){
            num++;
        } else {
            i++;
        }
    }
    return num;
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1001)); // 1001