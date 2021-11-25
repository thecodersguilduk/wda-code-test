// by Robert Dickinson

// declare consts and variables

const topList = document.querySelector('#topList');
const readout1 = document.querySelector('#readout1');
const button =  document.querySelector('button');
const lowerList = document.querySelector('#lowerList');
const readout2 = document.querySelector('#readout2');

let output;
let inputArray;
let array2;


//              examples of different inputs to test the program

inputArray = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
// inputArray = [3.5, 7.0, 3, 7, 8.365, 23, 6.156, 2, 67.6963, 34];
// inputArray = [1, 2, 3];
// inputArray = [3, 7, 7, 4, -7, 8, 23, 23, 6, -2, 67, 1, 2, 12, 34, -5, 9, 9, 2, 9, 4, 1, -99, 256, 0, 0, 5, 7, 9, -1, 9, 3, 9,5, -2, 7, 9, 8, 9, 8, 9, -45, 9, 78, 23, 56, 78, 98, 12, 3, 6, 89, -34, -12, -67, 56, 34, 89, 12, 67];
// inputArray = ['1', 2, '3'];
// inputArray = [,,,,];
// inputArray = ['fgd', 'gfv'];
// inputArray = [null, null, null];
// inputArray = ['','',''];
// inputArray = 'hello';
// inputArray = '';
// inputArray = {};
// inputArray = null;
// inputArray = undefined;
// inputArray = NaN;
// inputArray = 0;
// inputArray = [];
// inputArray = [1, 2, ['fg', 'ew']];

// try this one to see how the 'processed array' can differ from the original input array
// inputArray = [-1, 0, 1, 2, 3, {}, [], , undefined, null, '', 'hello', NaN];



if (Array.isArray(inputArray)) {            //check whether input is an array
        
    inputArray.forEach(thisItem => {        //iterate through each item in the array

        //populates any empty boxes in the 'input list' display
        if (thisItem === '') {thisItem = '[empty string]'}
        if (thisItem === null) {thisItem = 'null'}            
        if (Array.isArray(thisItem)) {thisItem = '[nested array]'} 

        // build 'input list' display
        let newdiv = document.createElement('div');
        newdiv.innerText = thisItem;
        topList.appendChild(newdiv);
    })

    // button becomes active
    button.classList.remove('omit');
    button.addEventListener('click', () => { process() });

} else {        
    readout1.classList.remove('omit');    // reveal readout 1 if input value isn't an array
}



function process () {           // called when button is clicked
    
    document.querySelector('#lowerframe').classList.remove('omit');    // reveal lower frame

    // filter out any non-number items 
    // (iterates through each item in the array, returning true or false, creating a new array only for items that returned true)
    array2 = inputArray.filter(thisItem => {                
            if (isNaN(thisItem) || thisItem==null || thisItem==='' || Array.isArray(thisItem)) {
                return false;
            }
            return true;
        }
    )
    
    if (array2.length > 0) {                    

        iteratedSum = 0;        
        lowerList.innerHTML = '';       //empty the list (needed if the button is clicked repeatedly)

        array2.forEach(thisItem => {    // iterate through the new array
                        
            if (typeof thisItem == 'string') {
                thisItem = Number(thisItem);        // convert string-type numbers to number-type numbers
            }
            
            iteratedSum += thisItem     //calculates the sum of all items
            
            // build 'processed list' display
            let newdiv = document.createElement('div');
            newdiv.innerText = thisItem;
            lowerList.appendChild(newdiv);            
        })

        readout2.innerText = "Average: " + (iteratedSum / array2.length);     //calculate the average
    
    } else {        
        readout2.innerText = 'Unable to calculate. No numbers in the array.';        //when array lenght is 0
    }

}
