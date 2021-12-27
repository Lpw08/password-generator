// Assignment Code
// Variables to set the code characters
var generateBtn = document.querySelector("#generate");
var LowerCase = "abcdefghijklmnopqrstuvwxyz"
var UpperCasepper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!@#$%^&*()?<>{}"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var size = prompt("What is the password length 8-128?")
  console.log(size)
  // if values/ min max criteria for setting password length
  if (size > 7 && size < 129) {
    return processPassword(size)
  }
  else {
    alert("Incorrect Value must be between 8-128")

  }
}
//Variables to set a character/password criteria
function processPassword(size) {
  var finalPassWord = ""
  var isLowerCase = confirm("Do you want to include lowercase characters?")
  var isUpperCase = confirm("Do you want to include uppercase characters?")
  var isnumeric = confirm("Do you want to include Numeric characters?")
  var isspecial = confirm("Do you want to include special characters?")
  for (let i = 0; i < size; i++) {

    // if values for the chosen criteria
    if (isLowerCase && finalPassWord.length < size) {
      var position = Math.floor(Math.random() * LowerCase.length)
      finalPassWord = finalPassWord + LowerCase.charAt(position)

    }
    if (isUpperCase && finalPassWord.length < size) {
      var position = Math.floor(Math.random() * UpperCasepper.length)
      finalPassWord = finalPassWord + UpperCasepper.charAt(position)
    }
    if (isnumeric && finalPassWord.length < size) {
      var position = Math.floor(Math.random() * numeric.length)
      finalPassWord = finalPassWord + numeric.charAt(position)
    }
    if (isspecial && finalPassWord.length < size) {
      var position = Math.floor(Math.random() * special.length)
      finalPassWord = finalPassWord + special.charAt(position)
    }
  }// final password
  return finalPassWord
}
// event listener to generate button
generateBtn.addEventListener("click", writePassword);
