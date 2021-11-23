window.onload = init;

function init() {
    // Remove or convert non-integer items
    function clean() {
        let alphanums = input.join(",");
        let nums = alphanums
                    .replace(/[A-z]/g, "")
                    .split(",")
                    .filter(item => item !== "")
                    .map(item => parseInt(item));
        
        return average(nums);
    };
    // Calculate average for an array of integers
    function average(nums) {
        let len = nums.length;
        let sum = nums.reduce((a, b) => a + b, 0);
        let ave = (sum / len).toFixed(7);

        return display(ave);
    };
    // Update DOM element with passed in output
    function display(ave) {
        output.innerHTML = ave;
    };

    let input = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
    let button = document.getElementById("calculate");
    let output = document.getElementById("output");

    button.onclick = clean;
};