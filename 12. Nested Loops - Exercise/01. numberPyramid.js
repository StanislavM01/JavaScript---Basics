function number(input){
    let number = Number(input[0])
    let  current = 1
    let isBigger = false
    let printCurrentLine = ``
    for(let n = 1;n <= number; n++){
        for(let q = 1;q <= n; q++){
            if(current > number){
                isBigger = true
                break;
            }
            printCurrentLine += current + ` `
            current++


        }
        console.log(printCurrentLine)
        printCurrentLine = ``
        if(isBigger){
            break;
            }
    }





}
number([`7`])