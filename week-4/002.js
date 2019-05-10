/*
Wagon Sorter

Wagon sorter adalah sebuah function yang berfungsi
untuk melakukan sorting penumpang dalam sebuah kereta.
Function wagonSorter akan menerima 1 nested array,
yang berisi data penumpang beserta kelas mereka.
Setiap kereta memiliki 4 kelas dan 4 gerbong yaitu 
Priority, Executive, Business, Economy.

RULES:
  - Tidak boleh memakai splice, slice, split, map, reduce, filter.
*/

function wagonSorter (people) {
  var output = [[],[],[],[]];
  
  for(var i = 0; i < people.length; i++){
      switch (people[i][1]){
        case "Priority":
          output[0].push(people[i][0])
          break;
        case "VIP":
          output[1].push(people[i][0])
          break;
        case "Business":
          output[2].push(people[i][0])
          break;
        case "Economy":
          output[3].push(people[i][0])
          break;
      }
  }

  return output;
}

console.log(wagonSorter([['Artour', 'Priority'],['Clinton', 'Priority'],['Omar', 'VIP'],['Mahrouj', 'Business'],['Jacky Mao', 'Economy'],['Kurtis', 'Economy']])) 
// [ [ 'Artour', 'Clinton' ],
//   [ 'Omar' ],
//   [ 'Mahrouj' ],
//   [ 'Jacky Mao', 'Kurtis' ] ]
console.log(wagonSorter([['Hikigaya', 'Economy'],['Rem', 'Priority'],['Inaba', 'VIP'],['Iori', 'Economy'],['Misa', 'Priority'],['Amane', 'Economy']])) 
// [ [ 'Rem', 'Misa' ],
//   [ 'Inaba' ],
//   [],
//   [ 'Hikigaya', 'Iori', 'Amane' ] ]
console.log(wagonSorter([['Bona', 'VIP'],['RongRong', 'Business'],['Bobo', 'Priority'],['Patrick', 'Priority'],['Sandy', 'Business'],['Crab', 'Business']])) 
// [ [ 'Bobo', 'Patrick' ],
//   [ 'Bona' ],
//   [ 'RongRong', 'Sandy', 'Crab' ],
//   [] ]