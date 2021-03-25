function charity(input){  // charity oznachava blagotvoritelnost
    let daysOfTheCharity = Number(input[0])
    let numberOfCooks = Number(input[1])
    let numberOfCake = Number(input[2])
    let numberOfWaffles = Number(input[3])
    let numberOfPancake = Number(input[4])

    let priceForOneCake = 45
    let priceForOneWaffles = 5.80
    let priceForOnePancake = 3.20
    // cenata na vsichkite sladki  pootdelno za edin den
    let priceForAllCakeInDay = priceForOneCake * numberOfCake
    let priceForAllWafflesInDay = priceForOneWaffles * numberOfWaffles
    let priceForAllPancakeInDay = priceForOnePancake * numberOfPancake

    let priceForAllProductsInOneDay = (priceForAllCakeInDay + priceForAllPancakeInDay + priceForAllWafflesInDay) * numberOfCooks
    let finalPriceFromAllDaysInTheCharity = priceForAllProductsInOneDay * daysOfTheCharity 
    let costForMakeProducts = finalPriceFromAllDaysInTheCharity / 8 //razhodi za prigotvqneto na produktite
    let cleanmoney = finalPriceFromAllDaysInTheCharity - costForMakeProducts
     console.log(cleanmoney)





}
charity(['186','35','150','179','210'])