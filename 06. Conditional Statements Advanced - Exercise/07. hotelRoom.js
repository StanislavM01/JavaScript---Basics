function hotel(input){
    let mounth = input[0]
    let day = Number(input[1])
    let resultSt = 0
    let resultAp = 0
    switch(mounth){
        case `May`:
            resultSt = 50 * day
            resultAp = 65 * day
            if(day > 7 && day <= 14 ){
                resultSt = resultSt * 0.95
                
                
            }else if(day > 14){
                resultSt = resultSt * 0.70
                resultAp = resultAp * 0.9
                
            }
        break;    
        case `June`:
            resultSt = 75.20 * day
            resultAp = 68.70 * day
            if(day > 14){
                resultSt = resultSt * 0.80
                resultAp = resultAp * 0.9
             }
        break;   
            
        case `July`:
            resultSt = 76 * day
            resultAp = 77 * day
            if(day > 14){
                resultAp = resultAp * 0.9
            }
    
        break;    
        case `August`:
            resultSt = 76 * day
            resultAp = 77 * day
            if( day > 14){
                resultAp = resultAp * 0.9
            }
        break;    
        case `September`:
            resultSt = 75.20 * day
            resultAp = 68.70 * day
            if(day > 14){
                resultSt = resultSt * 0.80
                resultAp = resultAp * 0.90

            }
        break;
        case `October`:
            resultSt = 50 * day
            resultAp = 65 * day
            if(day > 7 && day <= 14 ){
                resultSt = resultSt * 0.95
                
                
                
            }else if(day > 14){
                resultSt = resultSt * 0.70
                resultAp = resultAp * 0.9
                
            }
        break;    
    }
    console.log(`Apartment: ${(resultAp).toFixed(2)} lv.`)
    console.log(`Studio: ${(resultSt).toFixed(2)} lv.`)
    





}
hotel(["August",
"20"])


