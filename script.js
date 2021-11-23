window.onload = init;

function init() {
    function average() {
        let alphanums = INPUT.join(",");
        let nums = alphanums
                    .replace(/[A-z]/g, "")
                    .split(",")
                    .filter(item => item !== "")
                    .map(item => parseInt(item));
        let len = nums.length;
        let sum = nums.reduce((a, b) => a + b, 0);
        let ave = (sum / len).toFixed(7);

        return display(ave);
    };

    function display(ave) {
        output.innerHTML = ave;
    };

    const INPUT = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
    let button = document.getElementById("calculate");
    let output = document.getElementById("output");

    button.addEventListener("click", average);
};