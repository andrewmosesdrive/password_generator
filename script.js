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
  // create list of possible characters
  // input criteria from user
  // if any condition is true, include the appropriate array

  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let number = ["0","1","2","3","4","5","6","7","8","9"];
  let specialChar = ["!","@","#","$","%","^","&","*","?"];

  

  // Password is currently blank! We need to make a better one
  let password = "";

  let passwordLength = prompt("How long do you want your password to be?");

  let confirmUppercase = confirm("Do you want to include upper case letters?");
  let confirmLowercase = confirm("Do you want to include upper case letters?");
  let confirmNumber = confirm("Do you want to include upper case letters?");
  let confirmSpecialChar = confirm("Do you want to include upper case letters?");

  console.log(passwordLength, confirmUppercase, confirmLowercase, confirmNumber, confirmSpecialChar)




  // create a for loop that repeats number of userLength times
  // math.random out of possible char options
  // concatenate random characters

    


  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
