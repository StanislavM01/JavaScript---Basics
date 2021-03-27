function price(input){
    let sizeKm = Number(input[0])
    let dayOrNight = (input[1])

    if(sizeKm < 20 && dayOrNight == 'day'){
        let taxiDay = (0.7 + sizeKm * 0.79).toFixed(2)
        console.log(taxiDay)
    }else if (sizeKm < 20 && dayOrNight == 'night'){
        let taxiNight = (0.7 + sizeKm * 0.90).toFixed(2)
        console.log(taxiNight)
    }else if (sizeKm >= 20 && sizeKm < 100){
        let BusPrice = (sizeKm * 0.09).toFixed(2)
        console.log(BusPrice)
    }else if(sizeKm >= 100 ){
        let priceTrain = (sizeKm * 0.06).toFixed(2)
        console.log(priceTrain)
    }




}
price([`5`,'day'])
price([`7`,'night'])
price([`25`,'day'])
price([`180`,'night'])