const testArr = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
const filterArrForNumbers = arr => arr.filter(value => !isNaN(value));
const arrAvg = arr => arr.reduce((a,b) => a + parseInt(b), 0) / arr.length;
const displaySection = document.getElementById('arrayAverage');
const markup = `
  <div id="displayArray">${testArr}</div>
  <button id="calculateAverage">Calculate Average</button>
`;
const answerMarkup = `<div id="answer">${arrAvg(filterArrForNumbers(testArr))}</div>`
displaySection.insertAdjacentHTML('afterbegin', markup);
const calculateButton = document.getElementById('calculateAverage');
calculateButton.addEventListener("click", () => displaySection.insertAdjacentHTML('beforeend',answerMarkup));
