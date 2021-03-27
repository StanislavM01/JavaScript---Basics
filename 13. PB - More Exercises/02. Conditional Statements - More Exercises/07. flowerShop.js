function flowShop(input){
    let magnolias = Number(input[0])
    let hyacinth = Number(input[1])
    let rose = Number(input[2])
    let cactus = Number(input[3])
    let priceOfGift = Number(input[4])

    let priceMagnol = magnolias * 3.25
    let priceHyac = hyacinth * 4
    let priceRose = rose * 3.5
    let priceCactus = cactus * 8
    finalPrice = ((priceMagnol + priceHyac + priceRose + priceCactus) * 0.95)

    if(finalPrice >= priceOfGift){
        let leftMoney = Math.floor(finalPrice - priceOfGift)
        console.log(`She is left with ${leftMoney} leva.`)
    }else{
        let needMoney = Math.ceil(priceOfGift - finalPrice)
        console.log(`She will have to borrow ${needMoney} leva.`)
    }




}
flowShop(['15','7','5','10','100'])