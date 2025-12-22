/** * Function to reverse a string
 * Requirement: Convert to chars, loop in reverse, concatenate, and print.
 */
function reverseString(str) {
    // 1. Convert the input into characters
    let chars = str.split("");
    let reversed = "";

    // 2. Loop them in reverse direction
    // 3. Concatenate the string
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }

    // 4. Print the new string
    console.log("Reversed String: " + reversed);
    return reversed;
}

/**
 * Function to check if the given string is a palindrome
 * Requirement: Return true if same, else false.
 */
function isPalindrome(originalStr) {
    // Get the reversed version using our first function
    let reversedStr = reverseString(originalStr);

    // 1. Check if the reverse string and original string are the same
    // Hint: Use strict equality (===) to compare
    if (originalStr === reversedStr) {
        // 2. Return true if same
        return true;
    } else {
        // 2. Return false if different
        return false;
    }
}

// --- Testing the functions ---

let testString1 = "racecar";
console.log(`Is "${testString1}" a palindrome?`, isPalindrome(testString1));

console.log("-------------------");

let testString2 = "hello";
console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2));

/*
let str = "JavaScript"

let chars = str.split("");
let reversed = "";
for (let i = chars.length ; i >= 0; i--) {
        reversed = reversed+chars[i];
        console.log(originalString.charAt(i))
    }


//reverse string
let originalString = "JavaScript"

let reversedString = ""

for(let i=originalString.length;i>=0;i--){
    
    reversedString=reversedString+originalString.charAt(i)
    
    //console.log(originalString.charAt(i))
}
console.log("originalString is "+originalString)
console.log("reversedString is "+reversedString)

//split string
//let info="week1 Basic of JavaScript"
let info="learning javascript is fun and learning it with practice is better"
//let info1="JavaScript"
let info1="learning"
let sm=info.split(" ")
let count=0
//console.log(sm)
for(let i=0;i<sm.length;i++){
    console.log(sm[i])
    if(sm[i]==info1){
        count++
    }
}
console.log("The sentence is '" + info + "'")
console.log("The word '" + info1 + "' appeared " + count + " times in the sentence.")


if (originalString == reversedString) {
    console.log("It’s a palindrome!")
} else {
    console.log("Not a palindrome!")
}
*/