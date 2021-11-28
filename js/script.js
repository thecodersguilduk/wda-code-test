let inputArray = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
let numArray = [];
let sumArray = 0;
let avgArray = 0;

// function created to get the average using only the number from the 'inputArray' variable
function findAverage(){
   
    

    for( i=0; i < inputArray.length; i++) {         //function to loop while i is less than the length of the array
        let justNum = Number(inputArray[i]);        //used the Number() function if the current element in the array would return as a number or NaN 
        
        if (!isNaN(justNum)){                       //if statement to check if the value is not a NaN
            numArray.push(justNum);                 //if the value of 'justNum' is not a NaN value is added to the array 'numArray'
            sumArray += justNum;                    //summimg up the values by added the current value of 'sumArray' with the value of 'justNum'
        }
    }
    avgArray = (sumArray / numArray.length).toFixed(7);  //calculating that average by dividing the value of 'sumArray' with the length of numArray and fixing the results to the 7th number after the decimal point
        
}

//returuning element object from html document
let button = document.getElementById("btnCalculate") 
let result = document.getElementById("results")

button.addEventListener("click", function(){ //function to listen out for the button 'btnCalculate' from the html file to click
    
    findAverage(); //runs the function from above
    result.innerHTML = avgArray; // sets the contents of 'avgArray' to an element object html document
     
})


