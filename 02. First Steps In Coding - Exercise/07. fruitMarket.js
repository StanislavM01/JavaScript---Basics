function fruitShop(input){
    let priceStrawberry = Number(input[0])
    let kgForBanane = Number(input[1])
    let kgForOrange = Number(input[2])
    let kgForRaspberries = Number(input[3]) //malina
    let kgForStrawberry = Number(input[4])

    let priceOfRaspberries = priceStrawberry / 2
    let priceOfOrange = priceOfRaspberries * (60 / 100)
    let priceOfBanane = priceOfRaspberries * (20 / 100)

    let finalPriceStrawberry = priceStrawberry * kgForStrawberry
    let finalPriceRaspberries = priceOfRaspberries * kgForRaspberries
    let finalPriceOrange = priceOfOrange * kgForOrange
    let finalPriceBanane = priceOfBanane * kgForBanane
    let finalPriceOfAll = finalPriceStrawberry + finalPriceOrange + finalPriceBanane + finalPriceRaspberries 
    console.log(finalPriceOfAll)


}
fruitShop(["48",
"10",
"3.3",
"6.5",
"1.7"])
