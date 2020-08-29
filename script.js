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
function generatePassword() {
  // create list of possible characters via 4 separate arrays

  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];


  // Password is currently blank! We need to make a better one
  let password = "";


  // prompt user to see for how long the password will be
  let passwordLength = prompt("How long do you want your password to be? Password must be between 8 and 128 characters in length.");


  // if password length is less than 8 characters, send alert and return
  if (passwordLength < 8) {
    alert("You must choose a password between 8 and 128 characters!");

    return "";

  }


  // convert argument to string, return integers
  passwordLength = parseInt(passwordLength);


  // y/n confirms for upper/lower/number/special characters
  let confirmUppercase = confirm("Do you want to include upper case letters?");
  let confirmLowercase = confirm("Do you want to include lower case letters?");
  let confirmNumber = confirm("Do you want to include numbers?");
  let confirmSpecialChar = confirm("Do you want to include special characters?");


  // console.log(passwordLength, confirmUppercase, confirmLowercase, confirmNumber, confirmSpecialChar);


  // create pool of passwords then concatenate the random characters
  let passwordPool = []

  // if statements for user character choices, push the corresponding array into passwordPool array
  if (confirmUppercase === true) {

    passwordPool.push(upperCase);

  };

  if (confirmLowercase === true) {

    passwordPool.push(lowerCase);

  };

  if (confirmNumber === true) {

    passwordPool.push(number)

  };

  if (confirmSpecialChar === true) {

    passwordPool.push(specialChar);

  };


  // if no criteria are chosen, alert and return
  if (passwordPool.length === 0) {
    alert("You must choose at least 1 criteria!");

    return ""

  }


  // create final array to concatenate all items from password pool
  const finalArray = passwordPool.flat()


  // declare new array for joining
  let passwordArray = [];


  // create a for loop that repeats number of passwordLength times
  // math.random out of possible char options
  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * Math.floor(finalArray.length));
    passwordArray.push(finalArray[number]);

  }

  // join all items
  if (passwordArray.length > 0) {
    password = passwordArray.join("");

    return password;
  }
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
