function depositcalculator(input){
    let depositSum = Number(input[0]) 
    let termOfDepositInMounth = Number(input[1])
    let yearInterestRate = Number(input[2])
    let amountInterestForYear = (depositSum * yearInterestRate) / 100
    let amountInterestForMounth = amountInterestForYear / 12
    let theFinalSum = depositSum + (termOfDepositInMounth * amountInterestForMounth)
    console.log(theFinalSum)
}
depositcalculator(['3500','3','20']);