// A higher-order function that creates a counter
function createCounter(initialValue, updateFunction) {
    let value = initialValue; // Set the initial value of the counter

    // Function to update and return the counter value
    return function() {
        value = updateFunction(value); // Update the value using the auxiliary function
        return value;
    };
}

// Auxiliary function for an increasing counter
function increment(value) {
    return value + 1;
}

// Auxiliary function for a decreasing counter
function decrement(value) {
    return value - 1;
}

// Create an increasing counter
const counterUp = createCounter(0, increment);

// Create a decreasing counter
const counterDown = createCounter(10, decrement);

console.log(counterUp()); // Outputs: 1
console.log(counterUp()); // Outputs: 2
console.log(counterDown()); // Outputs: 9
console.log(counterDown()); // Outputs: 8
