//let browserName="chrome"
let browserName="edge"

if(browserName=="chrome") {
    console.log("The browser is " + browserName + ". Launching Chrome...")
    } else {
    console.log("The browser is " + browserName + ". Launching a different browser...");
}

let testType="api"
    
switch (testType) {
    case "smoke":
        console.log("Running " + testType + " tests.")
        break
    
    case "sanity":
        console.log("Running " + testType + " tests.")
        break
    
    case "regression":
        console.log("Running " + testType + " tests.")
        break
    
    default:
        // The default case handles 'smoke' if no other match is found
        console.log("Defaulting to smoke tests.")
        break
    }