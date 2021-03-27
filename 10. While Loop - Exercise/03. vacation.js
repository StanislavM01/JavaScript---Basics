function vacaion(input){
    let needMoney = Number(input[0])
    let havemoney = Number(input[1])
    let i = 2
    let command = input[i]
    let s = 3
    let spendOrSafeMoney = Number(input[s])
    let costDay = 0
    let day = 0


    while(havemoney < needMoney){
        day++
        if(command == `spend`){
            havemoney -= spendOrSafeMoney
            if(havemoney < 0){
                havemoney = 0
            }
            costDay++
            if(costDay >= 5){
                console.log(`You can't save the money.`)
                console.log(`${day}`)
                break;
            }
        }else{
            havemoney += spendOrSafeMoney
            costDay = 0
        }
        i += 2
        command = input[i]
        s += 2
        spendOrSafeMoney = Number(input[s])
    }
    if(havemoney >= needMoney){
        console.log(`You saved the money for ${day} days.`)
    }

}
vacaion(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

