function prime(input){
    let nachGranicaonepair = Number(input[0])
    let nachGranicaTwopair = Number(input[1])
    let endgranicaOnePair = Number(input[2])
    let endgranicaTwoPair = Number(input[3])
    let theEndOnePair = nachGranicaonepair + endgranicaOnePair
    let theEndTwoPair = nachGranicaTwopair + endgranicaTwoPair
    let flagOnePair = true 
    let flagTwoPair = true

    for(let i = nachGranicaonepair; i <= theEndOnePair; i++){
        for(let q = nachGranicaTwopair;q <= theEndTwoPair; q++){
            flagTwoPair = true
            flagOnePair = true
                for(let w = 2; w < i; w++){
                    if(i % w == 0){
                        flagOnePair = false
                    }
                }
                for(let s = 2; s < q; s++){
                    if(q % s == 0){
                        flagTwoPair = false
                    }

                }
            
            if(flagOnePair && flagTwoPair){
                console.log(`${i}${q}`)
            }
            

                
        }

    }
    





}
prime([`10`,`20`,`5`,`5`])