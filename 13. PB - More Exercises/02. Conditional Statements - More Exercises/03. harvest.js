function wine(input){
    let area = Number(input[0])
    let grapesSqM = Number(input[1])
    let needLitWine = Number(input[2])
    let workers = Number(input[3])
    let createWine = ((area * grapesSqM) * 0.4) / 2.5
    
    if(createWine < needLitWine){
        let needWine = Math.floor(needLitWine - createWine)
        console.log(`It will be a tough winter! More ${needWine} liters wine needed.`)
    }else{
        let leftWine = Math.ceil(createWine - needLitWine)
        let wineForPerson = Math.ceil(leftWine / workers)
        console.log(`Good harvest this year! Total wine: ${Math.floor(createWine)} liters.`)
        console.log(`${leftWine} liters left -> ${wineForPerson} liters per person.`)

    }



}
wine(['650','2','175','3'])