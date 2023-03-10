// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays that contain all the possible characters that can be used in the  generated password
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "?"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// Creates function that will prompt user about password settings
function generatePassword() {
  var passwordLength = prompt("Enter the number of characters between 8 and 128.");
  var upperCase = confirm("Do you want to add uppercase letters to your password?");
  var lowerCase = confirm("Do you want to add lowerercase letters to your password?");
  var spChar = confirm("Do you want to add special characters to your password?");
  var number = confirm("Do you want to add numbers to your password?");
  //Creates an empty array for the password to be placed into
  const tempPass = [];
  // While loop so that it passes through at least once and all criteria is met and then will loop through until desired length is reached
  while (tempPass.length < passwordLength) {
    if (tempPass.length < passwordLength && upperCase == true) {
      tempPass.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
    }
    if (tempPass.length < passwordLength && lowerCase == true) {
      tempPass.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
    }
    if (tempPass.length < passwordLength && spChar == true) {
      tempPass.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    }
    if (tempPass.length < passwordLength && number == true) {
      tempPass.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
  }
  // Nested function to shuffle the patterned array created above to make an even further secure password
  function shuffleArray(array) {
    let len = array.length,
      currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
      let randIndex = Math.floor(Math.random() * (currentIndex + 1));
      var temp = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temp;
    }
  }
  /*I wanted to leave this in because it was a very useful tool when trying to get the shuffleArray function to properly work and I want to show that I am knowledgable on console.log
  console.log("Array before shuffling", tempPass);
  shuffleArray(tempPass);
  console.log("Array after shuffling", tempPass);
  */

  //This calls the shuffleArray function on the patterned tempPass that was created in the while loop
  shuffleArray(tempPass);
  //This takes the commas out of the array and presents the password in its final form
  let finalPass = tempPass.join("");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
  } else {
    //Finally this returns the shuffled password
    return (finalPass);
  }

}
