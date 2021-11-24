window.onload = init;

function init() {
    // Purify the array (remove or convert non-integer data types)
    function purify() {
        let alphanums = input.join(","); // Array to string conversion
        let nums = alphanums
                    // Search string for pattern and replace it 
                    .replace(/[A-z]/g, "") 
                    // Split string into an array of substrings
                    .split(",")
                    // Filter a new array filled with array items that pass the test function
                    .filter(item => item !== "") 
                    // Map a new array from calling a function on every array item
                    .map(item => parseInt(item));
        
        return average(nums);
    };
    // Work out the average
    function average(nums) {
        let len = nums.length;
        // Calculate sum total of array items 
        let sum = nums.reduce((a, b) => a + b, 0);
        // Calculate average of array items 
        let ave = (sum / len).toFixed(7); // 7 decimal places

        return display(ave);
    };
    // Display the average
    function display(ave) {
        // Update DOM element with final output
        output.innerHTML = ave; 
    };
    
    let input = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5]; // Provided input array
    let button = document.getElementById("calculate");
    let output = document.getElementById("output");

    button.onclick = purify;
};