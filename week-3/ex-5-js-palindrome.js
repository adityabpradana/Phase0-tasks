function palindrome(kata) {
    for(i=0; i<kata.length; i++){
        if(kata[i]!==kata[kata.length-i-1]){
            return false;
        } else {
        }
    }
    return true;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false