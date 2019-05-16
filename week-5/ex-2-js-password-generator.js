function changeVocals (str) {
    var strVocals = "";

    for(var i = 0; i<str.length; i++) {        
        switch(str[i]) {
            case "a":
                strVocals += "b";
                break;

            case "i":
                strVocals += "j";
                break;

            case "u":
                strVocals +=  "v";
                break;

            case "e":
                strVocals += "f";
                break;

            case "o":
                strVocals += "p";
                break;

            case "A":
                strVocals += "B";
                break;

            case "I":
                strVocals += "J";
                break;

            case "U":
                strVocals += "V";
                break;

            case "E":
                strVocals += "F";
                break;

            case "O":
                strVocals += "P";
                break;
            default:
                strVocals += str[i];
                break;
        }
    }

    return strVocals;
}
  
  function reverseWord (str) {
    var strReverse = "";

    for(var i = str.length-1; i >= 0; i--) {
        strReverse += str[i];
    }

    return strReverse;
  }
  
  function setLowerUpperCase (str) {
    var strChangeCase = ""
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz"

    for(var i = 0; i < str.length; i++) {
        
        //indexOf
        var index = -1;
        for(var j = 0; j<alphabet.length; j++) {
            if(str[i] === alphabet[j]){
                index = j;
                break;
            } 
        }

        if(index >= 0 && index < 26) {
            index += 26;
            strChangeCase += alphabet[index];
        } else if (index > 25) {
            index -= 26;
            strChangeCase += alphabet[index];
        } else {
            strChangeCase += str[i];
        }   
    }
    return strChangeCase;
  }
  
  function removeSpaces (str) {
    var strNoSpaces = "";

    for(var i = 0; i < str.length; i++) {
        if(str[i] === " "){

        } else {
            strNoSpaces += str[i];
        }
    }
    
    return strNoSpaces;
  }
  
  function passwordGenerator (name) {
    
    if(name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    
    var strVocals = changeVocals(name);
    var strReverse = reverseWord(strVocals);
    var strChangeCase = setLowerUpperCase(strReverse);
    var strNoSpaces = removeSpaces(strChangeCase);
    
    return strNoSpaces;
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'