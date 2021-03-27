function building(input){
    let storey = Number(input[0])
    let room = Number(input[1])
    for(let i = storey; i >= 1 ; i--){
        let result = ``
        for(let r = 0; r < room; r++){
            if(storey == 1){
                result += `L${i}${r} `
            }
            else if(i == storey){
                result += `L${i}${r} `
            }
            else if(i % 2 == 0){
                result += `O${i}${r} `
            }
            else if(i % 2 != 0){
                result += `A${i}${r} `

            }
        }
        console.log(result)


    }






}
building(["6", "4"])