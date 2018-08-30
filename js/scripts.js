document.getElementById('items').innerHTML = "[3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5]";

function calculate() {
  var numbersAndStrings = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

var integerTypeArray = numbersAndStrings.filter(number => !isNaN(number));

var arrayLength = integerTypeArray.length;

var sum = integerTypeArray.reduce((a, b) => a + parseInt(b), 0);

var average = sum / arrayLength;
var finalAnswer = average.toFixed(7);

  document.getElementById('result').innerHTML = finalAnswer;

console.log(integerTypeArray);
console.log(sum);
console.log(arrayLength);
console.log(average);
}

function clear() {
  document.getElementById('result').append = 'a';
}
