const numberMask = (num) => {
  const strNum = num.toString(); // Convert the number to a string
  const parts = strNum.split(""); // Split the string into an array of characters
  const formattedParts = []; // Array to store the formatted parts

  // Loop through each character in the array, starting from the end
  for (let i = parts.length - 1, j = 1; i >= 0; i--, j++) {
    formattedParts.unshift(parts[i]); // Add the current character to the start of the formatted parts array

    // Add a dot separator after every third character, except for the last group
    if (j % 3 === 0 && i !== 0) {
      formattedParts.unshift(".");
    }
  }

  // Join the formatted parts array into a string and return it
  return formattedParts.join("");
}

export default numberMask
