// Assignment Code
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

