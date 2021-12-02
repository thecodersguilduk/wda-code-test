/**  demo array */
var demoArray = [
  3,
  7,
  "df",
  "3",
  7,
  8,
  "df",
  23,
  6,
  2,
  67,
  "g",
  "34",
  12,
  34,
  5
];

/** Future Array */
var userInput = [];

/** interacting with array display - displaying result */

// 1: Listen for user interaction with array display
document
  .getElementById("arrayDisplay")
  .addEventListener("click", displayResult);

// 2: Display result
function displayResult() {
  document.getElementById("resultDisplay").innerHTML = calculateAverage(
    demoArray
  );
}

// 2.1: Calculate the average

function calculateAverage(array) {
  // remove strings , return numbers only
  const filtered_array = extractNumbers(array);
  // sum up values and divide by length of filtered_array
  const average = (filtered_array) =>
    filtered_array.reduce((a, b) => a + b) / filtered_array.length;

  return average(filtered_array).toFixed(7);
  // res: 16.230769
}

// 2.1.1: Create new array with numbers only

function extractNumbers(array) {
  // identify numbers outside and inside quotation marks
  const numbers = array.map((i) => Number(i));
  // res: [3, 7, NaN, 3, 7, 8, NaN, 23, 6, 2, 67, NaN, 34, 12, 34, 5]

  // remove NaNs and return new array
  function removeNaNs(value, index, array) {
    return !Number.isNaN(value);
  }
  // res: [3, 7, 3, 7, 8, 23, 6, 2, 67, 34, 12, 34, 5]

  return numbers.filter(removeNaNs);
  // res: [3, 7, 3, 7, 8, 23, 6, 2, 67, 34, 12, 34, 5]
}

/** Receiving user input - displaying result */

// 1: Verifying and calculation User input
document.getElementById("submitInput").onclick = verifyInput();

function verifyInput() {
  // // Get the value of the input
  let inputValue = document.getElementById("arrayInput").value;
  let text;
  // is value empty?
  if (inputValue === "") {
    text = `<span class="brand5color">Input required</span>`;
  }
  // does value contain at least one comma between entities?
  else if (!inputValue.match("^[,;]+$")) {
    text = `<span class="brand5color">Input must contain at least one comma</span>`;
  } else {
    // filling value into empty array
    userInput.push(inputValue);
    // calculating average
    text = "Average = " + calculateAverage(userInput);
  }
  document.getElementById("userResult").innerHTML = text;
}

window.onload = verifyInput();
