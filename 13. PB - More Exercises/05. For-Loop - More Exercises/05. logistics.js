function logistics(input){
    let numbOfGood = Number(input[0])
    let camion = 0
    let microbus = 0
    let train = 0
    let alltons = 0
    let tonsMicrobus = 0
    let tonsCamion = 0 
    let tonsTrain = 0 
    
    

    for(let i = 1; i <= numbOfGood; i++){
        let tons = Number(input[i])
        alltons += tons
        
        
        
        

        if(tons <= 3){
            tonsMicrobus += tons
            microbus += tons * 200
        }else if(tons >= 4 && tons <= 11){
            tonsCamion += tons
            camion += tons * 175
        }else if(tons >= 12){
            tonsTrain += tons
            train += tons * 120
        }
    }

    let procMicrobus = (tonsMicrobus / alltons) * 100
    let procCamion = (tonsCamion / alltons) * 100
    let procTrain = (tonsTrain / alltons) * 100

    console.log(((camion + microbus + train) / alltons).toFixed(2))
    console.log(`${procMicrobus.toFixed(2)}%`)
    console.log(`${procCamion.toFixed(2)}%`)
    console.log(`${procTrain.toFixed(2)}%`)






}
logistics([`4`,`1`,`5`,`16`,`3`])