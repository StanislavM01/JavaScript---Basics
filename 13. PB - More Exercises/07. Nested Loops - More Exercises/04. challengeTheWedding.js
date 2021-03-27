function wedding(input){
    let man = Number(input[0])
    let girl = Number(input[1])
    let numbOfTable = Number(input[2])
    let lastTable = 0
    let sreshti = ``
    let flag = false

    for(let i = 1; i <= man;i++){
        for(let w = 1; w <= girl;w++){
            
            sreshti += `(${i} <-> ${w}) `
            lastTable++
            if(lastTable == numbOfTable){
                flag = true
                break
                   
            }



        }
        if(flag){
            break
        }
    }
    console.log(sreshti)






}
wedding([`5`,`8`,`40`])