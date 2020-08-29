# Homework 3 Assignment 
## Random Password Generator

For this assignment, I was tasked with creating a random password generator, utilizing JavaScript, with the following acceptance criteria:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


We were given the HTML structure, along with accompanying CSS, and had to provide functionality to the application via Javascript. From there I began the relevant pseudocoding to build out what would be needed, and then adjusted accordingly as any issues arose from the process. This was a very beneficial homework, not just in terms of the necessary practice needed to begin to fully understand JavaScript, but also for insight into not just what works, but what works best for a given project (i.e. is the best tool for this job a string or an array).

### Credits
Joey Jepson (@alligatormonday) for assitance with troubleshooting and pseudocoding structure
Dane Burns (@daneburns) for guidance on best practices and solutions for functionality issues
Jeremy Cantwell (tutor) for general feedback

www.w3schools.com - general information
developer.mozilla.org - additional syntax/functionality processes

### Summarized Methodology/Structuring:

Within the "generate password" function (primary function):

- Create a list of possible characters by utilizing 4 separate arrays
- Determine how long the user would like the password to be with a prompt
- Set alerts and returns for if the user does not choose the proper criteria
- Utilize "parseInt" to convert arguments to strings and return integers
- Establish y/n confirms for the desired character criteria
- Create a new array as a "pool" of passwords based on the criteria chosen, and using the .push function, push each individual array into it for each corresponding confirm
- Create a "final array" in which the "password pool" of chosen criteria will be flattened using the .flat function
- Create a for loop which will randomize the passwords in the final array, pushing them to a "password array"
- Join all items in the "password array" using the .join function

### Additional issues and solutions
I noticed during this assignment that although I was able to set returns for when the user did not follow the proper criteria or did not specify any criteria, an "undefined" was being returned to the UI. I found a solution to this problem by always specifying my return with an empty string.

