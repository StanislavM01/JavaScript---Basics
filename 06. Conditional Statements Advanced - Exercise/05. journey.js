function journey(input){
    let budget = Number(input[0])
    let season = (input[1])
    let result = 0

    if(budget <= 100){
        if(season == `summer`){
            result = (budget * 0.3).toFixed(2)
            console.log(`Somewhere in Bulgaria`)
            console.log(`Camp - ${result}`)
        }else if(season == `winter`){
            result = (budget * 0.7).toFixed(2)
            console.log(`Somewhere in Bulgaria`)
            console.log(`Hotel - ${result}`)
        }
}else if (budget <= 1000){
        if(season == `summer`){
            result = (budget * 0.4).toFixed(2)
            console.log(`Somewhere in Balkans`)
            console.log(`Camp - ${result}`)
        }else if(season == `winter`){
            result = (budget * 0.8).toFixed(2)
            console.log(`Somewhere in Balkans`)
            console.log(`Hotel - ${result}`)
        }

}else if(budget > 1000){
        result = (budget * 0.9).toFixed(2)
        console.log(`Somewhere in Europe`)
        console.log(`Hotel - ${result}`)
}




}
journey(["1500", "summer"])