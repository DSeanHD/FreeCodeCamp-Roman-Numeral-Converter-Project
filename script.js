let number = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let output = document.getElementById("output");

const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman() {
  let userInput = Number(number.value);
  output.innerText = "";

  if (number.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  } else if (number.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (number.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  
  for (let i = 0; i < romans.length; i++) {
    while (userInput >= numerals[i]) {
      userInput -= numerals[i];
      output.innerText += romans[i];
    }
  }

}

convertBtn.addEventListener("click", convertToRoman);
