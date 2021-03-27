function dishwasher(input){
    let bottle = Number(input[0])
    let i = 1
    let command = input[i]
    let Litt = bottle * 750
    let saucepan = 0 //tendjeri
    let pan = 0
    let numbWasher = 0


    while(command != `End`){
        numbWasher++
        if(numbWasher < 3){
        pan += Number(command)
        Litt -= Number(command) * 5
        }else if(numbWasher = 3){
        saucepan += Number(command)
        Litt -= Number(command) * 15
        numbWasher = 0
        }
        i++
        command = input[i]
        if(Litt < 0){
            break;
        }
    }

        if(Litt >= 0){
            console.log(`Detergent was enough!`)
            console.log(`${pan} dishes and ${saucepan} pots were washed.`)
            console.log(`Leftover detergent ${Litt} ml.`)
        }else{
            console.log(`Not enough detergent, ${Math.abs(Litt)} ml. more necessary!`)
        }
        
    





}
dishwasher([`1`,`10`,`15`,`10`,`12`,`13`,`30`])
