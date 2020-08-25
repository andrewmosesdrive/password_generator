// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "";

    let criteria = document.getElementById(criteriaPrompt).value;
    let length = document.getElementById(lengthPrompt).value;
    let character = document.getElementById(characterPrompt).value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+-=";

    for(let i = 0; i <= length; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

    }



  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
