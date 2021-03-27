function secret(input){
    let first = Number(input[0])
    let second = Number(input[1])
    let thirty = Number(input[2])
    let flag = true

    for(let i = 1; i <= first;i++){
        for(let q = 2;q <= second;q++){
            for(let s = 1;s <= thirty;s++){
                if(q == 2){
                    flag = true
                }else{
                    for(let p = 2;p < q;p++){
                        if(q % p == 0){
                            flag = false
                        }
                    }

                }
                if(flag){
                    if(i % 2 == 0){
                        if(s % 2 == 0){
                            console.log(`${i} ${q} ${s}`)

                        }
                    }
                }
                flag = true

                
            }
        }
    }





}
secret([`8`,`2`,`8`])