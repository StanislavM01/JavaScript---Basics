function traveling(input){
    let country = ``
    let i = 0
    let needMoney = 0
    let moneyWithWork = 0
    let haveMoney = 0
    let command = ``
    flag = false

    while(command != `End`){
        country = input[i]
        i++
        needMoney = Number(input[i])

     while(haveMoney < needMoney){
        i++
        moneyWithWork = Number(input[i])
        haveMoney += moneyWithWork
    
        
    }
    i++
    command = input[i]
    console.log(`Going to ${country}!`)
    haveMoney = 0


    }





}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
