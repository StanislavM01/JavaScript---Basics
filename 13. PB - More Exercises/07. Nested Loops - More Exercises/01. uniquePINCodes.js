function pin(input){
    let first = Number(input[0])
    let second = Number(input[1])
    let thirty = Number(input[2])
    let flag = true

    for(let i = 1;i <= first;i++){
        for(let w = 2;w <= second;w++){
            for(let q = 1;q <= thirty;q++){
                if(w == 2){
                    flag = true
                }else{
                    for(let s = 2;s < w;s++){
                        if(w % s == 0){
                            flag = false
                        }
                    }
                }
                if(flag){
                    if(i % 2 == 0){
                        if(q % 2 == 0){
                            console.log(`${i} ${w} ${q}`)

                        }
                    }
                }
                flag = true

            }
        }
    }





}
pin([`3`,`5`,`5`])