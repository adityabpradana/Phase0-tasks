console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

function xo(str) {
    var i,num, logic;

    num = str.length;
    logic = 0;

    for(i=0; i<num; i++){
        if(str[i]==="x"){
            logic = logic + 1;
        }
        else if(str[i]==="o"){
            logic = logic - 1;
        }
    }

    if(logic==0){
        return true;
    }
    else{
        return false;
    }
}