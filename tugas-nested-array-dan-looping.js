function panggilNestedArray(value){
 // tulis jawabanmu disini
   var newArray = [];


   for (i = 0; i < value[0].length; i++) {
      let array = [];
      array.push(value[0][i]);
      array.push(value[1][i]);
      array.push(value[2][i]);
      newArray.push(array);
   }

   console.log(newArray);
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)

