function groupAnimals(animals) {
    output = [];

    animals.sort();
    output.push([animals[0]]);
    j = 0;

    for(i=1; i<animals.length; i++) {
        if(animals[i][0] === animals[i-1][0]) {
            output[j].push(animals[i]);
        } else {
            output.push([animals[i]])
            j++;
        }
    }
    return output;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]