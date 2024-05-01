let number = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let output = document.getElementById("output");

function convertToRoman() {
  if (number.value == "") {
    output.innerHTML = "Please enter a valid number";
    number.value = "";
    return;
  } else if (number.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    number.value = "";
    return;
  }

  if (number.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    number.value = "";
    return;
  }

  // Define arrays for Roman numeral symbols and their corresponding values
  const romanSymbols = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];
  const romanValues = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];

  // Initialize an empty string to store the Roman numeral representation
  let romanNumeral = "";

  // Iterate through the romanValues array to construct the Roman numeral
  for (let i = 0; i < romanValues.length; i++) {
    // Repeat while the current value can be subtracted from num
    while (number.value >= romanValues[i]) {
      romanNumeral += romanSymbols[i]; // Append the corresponding symbol
      number.value -= romanValues[i]; // Subtract the value from num
    }
  }

  number.value = "";
  output.innerHTML = romanNumeral;
}

convertBtn.addEventListener("click", convertToRoman);

