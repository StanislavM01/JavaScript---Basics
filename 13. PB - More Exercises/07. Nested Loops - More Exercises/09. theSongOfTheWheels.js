function song(input){
    let number = Number(input[0])
    let result = ``
    let passwordNum = 0
    let thepass = ``

    for(let i = 1; i <= 9;i++){
        for(let w = 1; w <= 9;w++){
            for(let s = 1; s <= 9;s++){
                for(let q = 1; q <= 9;q++){
                    if(i < w){
                        if(s > q){
                           if((i * w) + (s * q) == number){
                               result += `${i}${w}${s}${q} `
                               passwordNum++
                               if(passwordNum == 4){
                                   thepass += `${i}${w}${s}${q}`
                               }
                           }
                        }
                    }


                }
            }
        }
    }
    if(passwordNum >= 1){
        console.log(result)
    }
    if(passwordNum >= 4){
        console.log(`Password: ${thepass}`)
    }else{
        console.log(`No!`)
    }





}
song([`139`])
