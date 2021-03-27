function repsystem(input){
    let needSum = Number(input[0])
    let i = 1
    let command = input[i]
    let numbOfTrans = 1
    let sumToFind = 0
    let sumCash = 0
    let numbOfCashPay = 0
    let sumCard = 0
    let numbOfCardPay = 0
    
    while(command != `End`){

        if(numbOfTrans % 2 != 0 && Number(command) > 100){
            console.log(`Error in transaction!`)
        }else if(numbOfTrans % 2 != 0 && Number(command) <= 100){
            console.log(`Product sold!`)
            sumToFind += Number(command)
            sumCash += Number(command)
            numbOfCashPay++
        }
        if(numbOfTrans % 2 == 0 && Number(command) < 10){
            console.log(`Error in transaction!`)
        }else if (numbOfTrans % 2 == 0 && Number(command) >= 10){
            console.log(`Product sold!`)
            sumToFind += Number(command)
            sumCard += Number(command)
            numbOfCardPay++
        }

        if(sumToFind >= needSum){
            break
        }
        i++
        command = input[i]
        numbOfTrans++
    
    }

    if(sumToFind >= needSum){
        let averageCash = sumCash / numbOfCashPay
        let averageCard = sumCard / numbOfCardPay
        console.log(`Average CS: ${averageCash.toFixed(2)}`)
        console.log(`Average CC: ${averageCard.toFixed(2)}`)
    }else if(command == `End`){
        console.log(`Failed to collect required money for charity.`)
    }
    





}
repsystem([`500`,`120`,`8`,`63`,`256`,`78`,`317`])