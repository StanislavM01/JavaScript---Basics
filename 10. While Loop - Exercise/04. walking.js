function walking(input){
    let i = 0
    let steps = input[i]
    let allSteps = 0
    let s = 0
    let command = input[s]
    while(command != `Going home`){
        allSteps += Number(steps)
        i++
        steps = Number(input[i])
        s++
        command = input[s]
        if(allSteps >= 10000){
            allSteps = allSteps - 10000
            console.log(`Goal reached! Good job!`)
            console.log(`${allSteps} steps over the goal!`)
            break
        }

    }
    if(command == `Going home`){
        i++
        steps = Number(input[i])
        allSteps += Number(steps)
        if(allSteps >= 10000){
            allSteps = allSteps - 10000
            console.log(`Goal reached! Good job!`)
            console.log(`${allSteps} steps over the goal!`)
        }else{
            let needStep = 10000 - allSteps
            console.log(`${needStep} more steps to reach goal.`)
        }

    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


