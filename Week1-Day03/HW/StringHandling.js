//reverse string
let originalString = "JavaScript"

let reversedString = ""

for(let i=originalString.length;i>=0;i--){
    
    reversedString=reversedString+originalString.charAt(i)
    
    //console.log(originalString.charAt(i))
}
console.log(originalString)
console.log(reversedString)


//split string
//let info="week1 Basic of JavaScript"
let info="learning javascript is fun and learning it with practice is better"
//let info1="JavaScript"
let info1="learning"
let sm=info.split(" ")
let count=0
console.log(sm)
for(let i=0;i<sm.length;i++){
    console.log(sm[i])
    if(sm[i]==info1){
        count++
    }
}
console.log("The word '" + info1 + "' appeared " + count + " times.")