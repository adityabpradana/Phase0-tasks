/*
    =============
    Shopping Ads 
    =============

    Saat sedang asik membuka website. user tertarik untuk memencet iklan,
    kemudian membeli barang di toko online favouritenya.
    
    [INSTRUCTION]
    Buatlah system ads untuk Website dimana user memilih belanjaan dari 
    var products dengan cara menawarkan berdasarkan referensi yang user 
    paling sering jelajahi.

    [EXAMPLE]
    jika user memiliki catatan akun seperti:
    {
      username: 'Naruto',
      favourite: ['indomie', 'mie sedap'],
      saldo: 10000 
    }
    , maka User akan mendapat tawaran 
    - indomie seharga 3000
    - mie sedap seharga 2300

    contoh outputnya adalah : 
    {
        title:"Ads"
        ads:[
             {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            }
        ]
    }

    **hanya tampilkan favourite yang harganya
    lebih rendah atau sama dengan saldo user**

    jika user tidak memiliki favourite
    , maka User akan mendapat tawaran yang bisa dibeli oleh saldonya

    jika user tidak memiliki catatan akun/tidak memiliki saldo
    , maka User akan mendapat semua tawaran

    jika user memiliki saldo yang kurang dari semua barang favouritenya
    , maka tampilkan semua barang yang bisa dibeli user tersebut

    [NOTE]
    - product di dalam ads dibuat berurutan sesuai favourite user
    , bila tidak berurutan akan dikurang 10% poin;

    [RULE]
    - Dilarang menggunakan built in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()

*/
var products = [
  {
      id:0,
      name:"micin",
      price:100
  },
  {
      id:1,
      name:"indomie",
      price:3000
  },
  {
      id:2,
      name:"mie sedap",
      price:2300
  },
  {
      id:3,
      name:"sari mie",
      price:2000
  }, 
  {
      id:4,
      name:"mie apa",
      price:1000
  }
]

function ads(userInfo) {
  var output = {};

  output.title = "ads";
  output.ads = [];

  if(userInfo["favourite"] === undefined){
      output.ads.push(products);
      return output;
  }

  for(var i=0; i<products.length; i++){
        for(var j = 0; j<userInfo.favourite.length; j++) {
            if(indexnya(userInfo.favourite[j]) === -1) {
            
            } else {
                if(userInfo.saldo >= products[i].price) {
                    output.ads.push(products[i])
                }
            }
        }

        
        for(var j = 0; j<userInfo.favourite.length; j++){
            if(userInfo.saldo > products[i].price) {
            output.ads.push(products[i]);
        }
        
            if(userInfo.saldo < 100) {
                output.ads.push(products);
            }
        } 

  return output;
}
}

function indexnya(dicari) {
    var index = -1;

    for(var i = 0; i < products.length; i++) {
        if(dicari === products[i]){
            index = i;
            break;
        }
    }
    return index;
}

console.log( ads({
  username: 'Naruto',
  favourite: ['indomie', 'mie sedap'],
  saldo: 10000 
}) )
/* 
    {
        title:"Ads"
        ads:[
             {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            }
        ]
    }
*/

console.log( ads({
  username: 'Hinata',
  favourite: ['mie sedap', 'indomie'],
  saldo: 10000 
}) )
/* 
    {
        title:"Ads"
        ads:[
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:1,
                name:"indomie",
                price:3000
            }
        ]
    }
*/

console.log( ads({
  username: 'Gara',
  favourite: ['indomie', 'sari mie'],
  saldo: 2000 
}) )
/* 
    {
        title:"Ads"
        ads:[
            {
                id:3,
                name:"sari mie"
                price:2000
            }
        ]
    }
*/

console.log( ads({
  username: 'Kakashi',
  favourite: ['indomie'],
  saldo: 2000 
}) )
/* 
    {
        title:"Ads"
        ads:[
             {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({
  username: 'Sakura',
  favourite: [],
  saldo: 2000
}))
/* 
    {
        title:"Ads"
        ads:[
             {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({
  username: 'Sasuke',
  favourite: ['micin'],
  saldo: 0
}))
/*
    {
        title:"Ads"
        ads:[
            {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/

console.log(ads({}))
/*
    {
        title:"Ads"
        ads:[
            {
                id:0,
                name:"micin",
                price:100
            },
            {
                id:1,
                name:"indomie",
                price:3000
            },
            {
                id:2,
                name:"mie sedap"
                price:2300
            },
            {
                id:3,
                name:"sari mie"
                price:2000
            },
            {
                id:4,
                name:"mie apa"
                price:1000
            }
        ]
    }
*/