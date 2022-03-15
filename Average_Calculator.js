var input = document.getElementById("num");
var total = 0;
var averageDisplay = document.getElementById("average");

/**
 * Im taking the value from the input and converting it into a string so that 
 * I can use the replace function to remove any quotation mark within the input box.
 * I've also assigned it a variable so that I can use it later.
 */
var inputString = input.value.toString().replace(/['']/g,'');

/**
 * This is a function that is taking in the inputString variable and splitting 
 * it to create an array of all the elements within it. I've also assigned it 
 * a variable to the function so that I can use it later on.
 */
var array = inputString.split(",").map(function (item) {
    return parseInt(item, 10);
});


/**
 * This function is used to filter the array above to remove any non numerical
 * values from the array and then returns the array back with with only numbers.
 */
var numArray = array.filter(function (item) {
    return !Number.isNaN(item);
});

/**
 * I've created a function so that it can be used in an onclick event on the 
 * HTML page.
 */
function calculate_average(){
    /**
     * This for loop is taking all the elements of the array and adding them up.
     */
    for(var i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }

    /**
     * The total of the elements is then divided by the array length to find the
     * average.
     */
     var average = 0;
    
     if(numArray.length>0)
     {
         average = total/numArray.length;
     }
     else
     {
         /*print some error message*/
         return averageDisplay.innerHTML = "The average cannot be calculated with the given input";    
     }

    /**
     * The average is then set to 7 decimal places and concatenate with a string. 
     * It is then assigned to an <p> element tag for it to be displayed.
     */
    return averageDisplay.innerHTML = "The average is: "+ average.toFixed(7);   
}

