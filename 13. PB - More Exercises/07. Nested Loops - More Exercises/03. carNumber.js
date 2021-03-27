function carNumber(input){
    let startNum = Number(input[0])
    let endNumb = Number(input[1])
    let result = ``

    for(let i = startNum;i <= endNumb;i++){
        for(let w = startNum;w <= endNumb;w++){
            for(let s = startNum;s<= endNumb;s++){
                for(let q = startNum;q<= endNumb;q++){
                    if(i % 2 == 0){
                        if((w + s) % 2 == 0){
                            if(q % 2 != 0){
                                if(i > q){
                                    result += `${i}${w}${s}${q} `
                                }
                                
                            }
                        }
                    }else if(i % 2 != 0){
                        if((w + s) % 2 == 0){
                            if(q % 2 == 0){
                                if(i > q){
                                    result += `${i}${w}${s}${q} `
                                    

                                }
                                
                            }

                        }
                    }
                }
            }
        }
    }
    console.log(result)




}
carNumber([`5`,`8`])