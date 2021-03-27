function tournament(input){
    let dayForTournament = Number(input[0])
    let sport = ``
    let i = 1
    let command = input[i]
    let winGameDay = 0
    let lossGameDay = 0
    let finallWin = 0
    let finallLoss = 0
    let moneyForDay = 0
    let finalMoney = 0
    let winOrLess = ``

    for(let t = 1; t <= dayForTournament;t++){
        while(command != `Finish`){
            sport = input[i]
            i++
            winOrLess = input[i]
            i++
            command = input[i]
            if(winOrLess == `win`){
                winGameDay++
                moneyForDay+=20
            }else if(winOrLess == `lose`){
                lossGameDay++
            }
            

        }
    if(winGameDay > lossGameDay){
        finalMoney += moneyForDay * 1.1
        finallWin++
    }else if(winGameDay < lossGameDay){
        finallLoss++
        finalMoney += moneyForDay
    }
    winGameDay = 0
    lossGameDay = 0
    moneyForDay = 0
    i++
    command = input[i]
    
}
if(finallWin > finallLoss){
    finalMoney = finalMoney * 1.2 
    console.log(`You won the tournament! Total raised money: ${finalMoney.toFixed(2)}`)
}else{
    console.log(`You lost the tournament! Total raised money: ${finalMoney.toFixed(2)}`)
}




}
tournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])

