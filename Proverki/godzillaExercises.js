function godzilla(input){
    let budget = Number(input[0])
    let numberStatists = Number(input[1])
    let shirtOfStatists = Number(input[2])
    let decorsOfFilm = budget * (10 / 100)
    let priceShirt = numberStatists * shirtOfStatists

    if(numberStatists > 150){
        priceShirt = priceShirt * (90 / 100)

    }
    if(decorsOfFilm + priceShirt > budget){
        let needMoney = (decorsOfFilm + priceShirt) - budget
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${needMoney.toFixed(2)} leva more.`)
    }else if (decorsOfFilm + priceShirt <= budget){
        let leftMoney = budget - (decorsOfFilm + priceShirt)
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left. `)
    }




}
godzilla(["9587.88",
"222",
"55.68"])



