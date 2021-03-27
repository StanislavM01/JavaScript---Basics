function fishShop(input){
    let priceMackerelForkg = Number(input[0]) // skumriq
    let priceSpratlForkg = Number(input[1]) // caca
    let bonitoKg = Number(input[2]) //palamut
    let horseMackerelKg = Number(input[3]) // safrid
    let musselKg = Number(input[4]) // midi
    let priceBonitoForKg = priceMackerelForkg * (60 / 100)
    let finalPriceBonitoForKg = priceMackerelForkg + priceBonitoForKg
    let priceHorseMackelerKg = priceSpratlForkg * (80 / 100) 
    let finallPriceHorseMackelerKg = priceSpratlForkg + priceHorseMackelerKg
    let finalPriceMusselForAllKg = musselKg * 7.5
    let finalPriceBonitoForAllKg = bonitoKg * finalPriceBonitoForKg
    let finalPriceHorseMackerelForAllKg = horseMackerelKg * finallPriceHorseMackelerKg
    let costForAll = finalPriceMusselForAllKg + finalPriceBonitoForAllKg + finalPriceHorseMackerelForAllKg
    console.log(priceHorseMackelerKg)


}
fishShop(['7','3','10','2','5'])