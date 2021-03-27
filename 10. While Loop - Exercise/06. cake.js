function cake(input){
   let sizeOne = Number(input[0])
    let sizeTwo = Number(input[1])
    let allSize = sizeOne * sizeTwo
    let i = 2
    let command = input[i]
    let sum = 0

    while(command != `STOP`){
        sum += Number(command)
        
        if(allSize < sum){
            let needCake = sum - allSize
            console.log(`No more cake left! You need ${needCake} pieces more.`)
            break
        }
        i++
        command = input[i]

    }
    if(command == `STOP`){
        allSize = allSize - sum
        console.log(`${allSize} pieces are left.`)
    }





}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

