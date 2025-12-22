let data = ["chrome", true, 132.8]
data[5] = "Webkit"
console.log(data)

data.pop()
console.log(data)

data.push("Firefox")
console.log(data)

data.shift()
console.log(data)

for(let val of data){
console.log(val)
}