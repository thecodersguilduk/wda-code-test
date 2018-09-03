/**
 * Calculates the average of a set of numbers in a given array.
 *
 * @param DataArr An array containing data to be calculated.
 * @constructor
 */

function CalculateAverage(DataArr) {

    this.DataArr = DataArr; // the input array

    var that = this;



    /**
     * Filter anything that is not a number out of the array.
     *
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

        return FilteredDataArr;

    };

    /**
     * Calculate the average sum of all the numbers in the array. Logs a message to the javascript console
     * on error.
     *
     * @returns {string} The average number or an error message.
     * @constructor
     */

    this.CalculateAvg = function() {

        try {

            var FilteredArr = this.FilterArr();

            var FilteredArrLength = FilteredArr.length;

            var total = FilteredArr.reduce(AddNums); // add the numbers together using the AddNums function

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

    document.getElementById("CalcBtn").addEventListener("click", function(e) {

        e.preventDefault();

        document.getElementById("CalcResponse").innerHTML = that.CalculateAvg();

    });

}

window.onload = function() {

    var OriginalDataArr = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

    document.getElementById("InputArr").innerHTML = OriginalDataArr.toString();

    new CalculateAverage(OriginalDataArr);


};
