/**
 * Calculates the average of a set of numbers in a given array.
 * @param DataArr An array containing data to be calculated
 * @constructor
 */

function CalculateAverage(DataArr) {

    this.DataArr = DataArr; // the input array

    this.FilteredArr; // array with all the invalid entries removed

    /**
     * Filter anything that is not a number out of the array
     * @constructor
     */

    this.FilterArr = function() {

        var InputArrLength = this.DataArr.length;

        var FilteredDataArr = this.DataArr;

        for(var i = 0; i <= InputArrLength; i++) {

            if(isNaN(FilteredDataArr[i])) {

                FilteredDataArr.splice(i, 1); // not a number, remove the element from the array.

            }

        }

    this.FilteredArr = FilteredDataArr;

    };

    /**
     * Calculate the average sum of all the numbers in the array.
     * @returns {string}
     * @constructor
     */

    this.CalculateAvg = function() {

        try {

            this.FilterArr();

            var FilteredArrLength = this.FilteredArr.length;

            var total = this.FilteredArr.reduce(AddNums); // add the numbers together using the AddNums function

            var avg = total / FilteredArrLength;

            return avg.toFixed(7);

        } catch(e) { // catch any errors that man occur like an empty array

            console.warn(e.message); // log waring to javascript console

            return "An error occurred";

        }

    };

    function AddNums(total, num) {

        return total + parseInt(num);

    }

}

window.onload = function() {

    var OriginalDataArr = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

    document.getElementById("InputArr").innerHTML = OriginalDataArr.toString();

    document.getElementById("CalcBtn").addEventListener("click", function(e) {

        e.preventDefault();

        var AvgCalculator = new CalculateAverage(OriginalDataArr);

        document.getElementById("CalcResponse").innerHTML = AvgCalculator.CalculateAvg();

    });

};
