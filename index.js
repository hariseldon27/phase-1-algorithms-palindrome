function isPalindrome(word) {
  const backWord = word.toLowerCase().split("").reverse().join("") 
  console.log(backWord)
  if (backWord === word) {
    return true
  } else {
    return false
  }
}

/* 
take single input word, convert to


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
