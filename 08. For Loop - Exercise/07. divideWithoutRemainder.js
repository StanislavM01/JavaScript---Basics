function divide(input){
    let n = Number(input[0])
    let numb2 = 0
    let numb3 = 0
    let numb4 = 0

    
    for(let i = 1; i <= n;i++){
        let num = Number(input[i])
        if(num % 2 == 0){
        numb2++
        }if (num % 3 == 0){
        numb3++
        }if(num % 4 == 0){
        numb4++
        }
    }
    let Numb2Pr = numb2 / n * 100
    let Numb3Pr = numb3 / n * 100
    let Numb4Pr = numb4 / n * 100
    console.log(`${Numb2Pr.toFixed(2)}%`)
    console.log(`${Numb3Pr.toFixed(2)}%`)
    console.log(`${Numb4Pr.toFixed(2)}%`)

    




}
divide(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
