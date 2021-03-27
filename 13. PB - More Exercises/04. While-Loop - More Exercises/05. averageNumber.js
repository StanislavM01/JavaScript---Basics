function average(input){
    let firstNumb = Number(input[0])
    let i = 1
    let secondNumb = Number(input[i])
    let allSum = 0
    let retry = 0


    while(retry != firstNumb){
        allSum += secondNumb
        i++
        secondNumb = Number(input[i])
        retry++
    }
    console.log((allSum / firstNumb).toFixed(2))





}
average([`2`,`6`,`4`])