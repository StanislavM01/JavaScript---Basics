function shopToy(input){
    let excursionPrice = Number(input[0])
    let numbPuzzels = Number(input[1])
    let numbDoll = Number(input[2])
    let numbBears = Number(input[3])
    let numbMinions = Number(input[4])
    let numbTrucks = Number(input[5])
    let allnumbsOfToy = numbPuzzels + numbDoll + numbBears + numbMinions + numbTrucks

    let pricePuzzels = numbPuzzels * 2.6
    let priceDoll = numbDoll * 3
    let priceBears = numbBears * 4.10
    let priceMinion = numbMinions * 8.20
    let priceTrucks = numbTrucks * 2
    
    let allCost = pricePuzzels + priceDoll + priceBears + priceMinion + priceTrucks

    if (allnumbsOfToy >= 50){
        allCost = allCost * 0.75
    }

    allCost = allCost * 0.90

    if(allCost >= excursionPrice){
        console.log(`Yes! ${(allCost - excursionPrice).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(excursionPrice - allCost).toFixed(2)} lv needed.`)
    }

    
    
}
shopToy(["320", "8", "2", "5", "5", "1"])