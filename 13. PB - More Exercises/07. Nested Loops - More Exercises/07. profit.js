function profit(input){
    let coinOnelv = Number(input[0])
    let coinTwolv = Number(input[1])
    let papierFivelv = Number(input[2])
    let allSum = Number(input[3])

    


    for(let i = 0; i <= coinOnelv;i++ ){
        for(let q = 0; q <= coinTwolv; q++){
            for(let w = 0; w <= papierFivelv; w++)
            if(i * 1 + q * 2 + w * 5 == allSum){
                console.log(`${i} * 1 lv. + ${q} * 2 lv. + ${w} * 5 lv. = ${allSum} lv.`)

            }
        }
    }





}
profit([`3`,`2`,`3`,`10`])