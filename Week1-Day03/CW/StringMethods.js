let values="Playwright@20 05"
//count number of characters -> length
console.log("Total no of chars :",values.length)
//index start from 0

//charAt -> print value based on index
console.log("charAt value :",values.charAt(5))

//upper or lower case
let nan="javaScript"
console.log("Upper case: ",nan.toUpperCase())
console.log("Lower case: ",nan.toLowerCase())

//concat
let a="Play"
let b="wright"
console.log(a.concat(b))

//split
let info="week1 Basic of JavaScript"
let sm=info.split(" ")
console.log(sm)
for(let i=0;i<sm.length;i++){
    console.log(sm[i])
}

//reverse
let empName1="Vinoth"
//htoniV
let rev=""
for(let i=empName1.length;i>=0;i--){
    //[h,t,o,n,i,V]
    rev=rev+empName1.charAt(i)
    //htoniV
    console.log(empName1.charAt(i))
}
console.log(rev)

//inbuilt rev function
let content="Java"
let final =content.split("").reverse().join("")
console.log(final)
