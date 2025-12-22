/**
 * Function to print odd numbers between 1 and 25
 * Requirement: Use a for loop and execute the function
 */
function printOddNumbers() {
    console.log("Printing odd numbers between 1 and 25:");

    // 1. Create a for loop to iterate values from 1 to 25
    // 'let' is used here as it is block-scoped
    for (let i = 1; i <= 25; i++) {
        
        // Use the modulo operator (%) for odd number detection
        // If the remainder of i divided by 2 is not 0, it is an odd number
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// 2. Call the function from the javascript
printOddNumbers();