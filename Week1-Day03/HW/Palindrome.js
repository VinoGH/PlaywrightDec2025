let orgWord="madam"
//madam
let revWord=""
for(let i=orgWord.length;i>=0;i--){
    //[m,a,d,a,m]
    revWord=revWord+orgWord.charAt(i)
    //madam
    console.log(orgWord.charAt(i))
}
console.log(revWord)

if (orgWord == revWord) {
    console.log("It’s a palindrome!")
} else {
    console.log("Not a palindrome!")
}