function twoNumber(input){
    let startNum = Number(input[0])
    let endNum = Number(input[1])
    let magicNum = Number(input[2])
    let combination = 0
    let firstNum = 0
    let secondNum = 0
    let flag = false


    for(let i = startNum; i <= endNum; i++){
        for(let q = startNum; q <= endNum;q++){
            combination++
            if(i + q == magicNum){
                firstNum = i
                secondNum = q
                flag = true
                break

                

            }
        }
        if(flag){
            break
        }
    }
    if(flag){
    console.log(`Combination N:${combination} (${firstNum} + ${secondNum} = ${magicNum})`)
    }else{
        console.log(`${combination} combinations - neither equals ${magicNum}`)
    }





}
twoNumber([`1`,`10`,`5`])