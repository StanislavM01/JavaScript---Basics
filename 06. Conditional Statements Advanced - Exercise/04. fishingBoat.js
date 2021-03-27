function fishing(input){
    let budget = Number(input[0])
    let season = (input[1])
    let fisher = Number(input[2])
    let result = 0
    

    switch(season){
        case `Spring`:
            if(fisher <= 6){
                result = 3000 * 0.9
            }else if(fisher >=7 && fisher <= 11){
                result = 3000 * 0.85
            }else if (fisher >= 12){
                result = 3000 * 0.75
            }
            break;
        case `Summer`:
            if(fisher <= 6){
                result = 4200 * 0.9
            }else if(fisher >=7 && fisher <= 11){
                result = 4200 * 0.85
            }else if (fisher >= 12){
                result = 4200 * 0.75
            }
            break;
        case `Autumn`:
            if(fisher <= 6){
                result = 4200 * 0.9
            }else if(fisher >=7 && fisher <= 11){
                result = 4200 * 0.85
            }else if (fisher >= 12){
                result = 4200 * 0.75
            }
            break;
        case `Winter`:
            if(fisher <= 6){
                result = 2600 * 0.9
            }else if(fisher >=7 && fisher <= 11){
                result = 2600 * 0.85
            }else if (fisher >= 12){
                result = 2600 * 0.75
            }
            break;
    }
    if(fisher % 2 == 0 && season !== "Autumn"){
            result = result * 0.95
        
    }
    if(budget >= result){
        let leftMoney = (budget - result).toFixed(2)
        console.log(`Yes! You have ${leftMoney} leva left.`)
    }else{
        let needMoney = (result - budget).toFixed(2)
        console.log(`Not enough money! You need ${needMoney} leva.`)
    }





}
fishing(["3600",
"Autumn",
"6"])
