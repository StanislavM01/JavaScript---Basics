function moving(input){
    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let allPlace = width * length * height
    let i = 3
    let command = input[i]
    let sum = 0



    while(command != `Done`){
        sum += Number(command)
        
        if(sum > allPlace){
            let result = sum - allPlace
            console.log(`No more free space! You need ${result} Cubic meters more.`)
            break;
        }
        i++
        command = input[i]
        


    }
    if(command == `Done`){
        let result = allPlace - sum
        console.log(`${result} Cubic meters left.`)
    }



}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])

