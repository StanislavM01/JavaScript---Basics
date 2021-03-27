function sumNumber(input){
    let a = Number(input[0])
    let b = Number(input[1])
    let finallNumb = Number(input[2])
    let flag = false
    let combination = 0

    let firstNumb = 0
    let secondNumb = 0


    for(let i = a ; i <= b; i++){
        for(let q = a; q <= b; q++){
            combination ++
            firstNumb = i
            secondNumb = q
            if(i + q == finallNumb){
                flag = true
                break
            }
        }
    if(flag){
    break
    }
    
    }
    if(flag){
        console.log(`Combination N:${combination} (${firstNumb} + ${secondNumb} = ${finallNumb})`)
    }else{
        console.log(`${combination} combinations - neither equals ${finallNumb}`)
    }





}
sumNumber(["88",
"888",
"1000"])


