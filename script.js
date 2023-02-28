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

  var tempPass = "";
  for (let index = 0; index < passwordLength; index++) {
    if (upperCase == true) {
      tempPass += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

    }
    if (lowerCase == true) {
      tempPass += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    if (spChar == true) {
      tempPass += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }
  return tempPass;


}
