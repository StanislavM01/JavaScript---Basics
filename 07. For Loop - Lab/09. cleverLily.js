function lily(input){
    let yearlily = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let priceForOneToy = Number(input[2])
    let moneyFromByrthday = 0
    let numbGift = 0
    let finalPriceSellToy = 0
    let moneyForFirstYs = 10
    

    for(let i = 1; i <= yearlily; ++i){
        if(i % 2 == 0){
            moneyFromByrthday += moneyForFirstYs
            moneyFromByrthday -= 1
            moneyForFirstYs += 10

        }else{
            numbGift += 1
        }


    }
    finalPriceSellToy = numbGift * priceForOneToy
    moneyFromByrthday += finalPriceSellToy
  


    if(moneyFromByrthday >= washingMachinePrice){
        let leftmoney = moneyFromByrthday - washingMachinePrice
        console.log(`Yes! ${leftmoney.toFixed(2)}`)
    }else if(moneyFromByrthday < washingMachinePrice){
        let needMoney = washingMachinePrice - moneyFromByrthday
        console.log(`No! ${needMoney.toFixed(2)}`)
    }
  





}
lily(["21", "1570.98", "3"])