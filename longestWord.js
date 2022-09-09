words = ["Tie", "Hamburger", "Soup", "October"]

function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word.length;
  }

  console.log(longestStringForLoop(words))
  
// I believe this runtime is O(1)