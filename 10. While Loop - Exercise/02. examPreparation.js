function preparation(input){
    negativScore = Number(input[0])
    let q = 1
    let nameQuest = input[q]
    let s = 2
    let score = Number(input[s])
    let i = 3
    let command = input[i]
    let sumOfScore = 0
    let numOfScore = 0
    let numbOfQuest = 0
    let sumOfNegative = 0
    

    while(sumOfNegative < negativScore){
        
        if(score <= 4){
            sumOfNegative++
        }
        
        i += 2
        command = input[i]
        q += 2
        nameQuest = input[q]
        numbOfQuest++
        sumOfScore += score
        s += 2
        score = Number(input[s])
        numOfScore++

        if(command == `Enough`){
            let average = sumOfScore / 4
            console.log(`Average score: ${average}`)
            console.log(`Number of problems: ${numbOfQuest}`)
            console.log(`Last problem: ${nameQuest}`)
        }
        
 
    }
    if(sumOfNegative == negativScore){
        console.log(`You need a break, ${negativScore} poor grades.`)
        
    }
    
console.log(numOfScore)
console.log(sumOfScore)
}
preparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
