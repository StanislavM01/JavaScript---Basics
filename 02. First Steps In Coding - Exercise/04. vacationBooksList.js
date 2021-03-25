function literature(input){
    let numberOfList = Number(input[0])
    let readListForOneHour = Number(input[1])
    let dayNumber = Number(input[2])

    let timeForReadBook = numberOfList / readListForOneHour
    let hoursNeedToReadBookForAllDays = timeForReadBook / dayNumber 
    console.log(hoursNeedToReadBookForAllDays)





}
literature(['850','15','50']);