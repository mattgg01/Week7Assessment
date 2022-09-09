let array = [28, 43, -12, 30, 4, 0, 12]



//I believe this runtime is O(n2) (Not to be confused with O(2n)
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)