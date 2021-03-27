function happyCat(input){
    let days = Number(input[0])
    let hours = Number(input[1])
    let priceForHour = 0
    let result = 0

    for(let i = 1; i <= days;i++){
        for(let q = 1; q <= hours;q++){
            if(i % 2 == 0){
                if(q % 2 != 0){
                    priceForHour += 2.5

                }else{
                    priceForHour += 1
                }

            }else if(i % 2 != 0){
                if(q % 2 == 0){
                    priceForHour += 1.25
                }else{
                    priceForHour += 1
                }
            }

        }
        console.log(`Day: ${i} - ${priceForHour.toFixed(2)} leva`)
        result += priceForHour
        priceForHour = 0
    }
    console.log(`Total: ${result.toFixed(2)} leva`)




}
happyCat([`2`,`5`])