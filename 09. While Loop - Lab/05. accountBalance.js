function balance(input){
    let index = 0
    let balance = input[index]
    let allMoney = 0

while(balance != `NoMoreMoney`){
    if(balance > 0){
        allMoney += Number(balance)
        console.log(`Increase: ${Number(balance).toFixed(2)}`)
        index++
        balance = input[index]
    }else if(balance < 0){
        console.log(`Invalid operation!`)
        break;
    }
}
console.log(`Total: ${Number(allMoney).toFixed(2)}`)





}
balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])

