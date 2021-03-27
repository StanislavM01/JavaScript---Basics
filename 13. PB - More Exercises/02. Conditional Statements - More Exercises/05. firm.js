function company(input){
    let needHours = Number(input[0])
    let days = Number(input[1])
    let workers =  Number(input[2])

    let timeForWork = (days * 0.90) * 8
    let outsideWorkingHours = (days * 2) * workers
    let allHoursWork = Math.floor(timeForWork + outsideWorkingHours)
    if(allHoursWork >= needHours){
        let leftHours = allHoursWork - needHours
        console.log(`Yes!${leftHours} hours left.`)
    }else if(needHours > allHoursWork){
        let needMoreHours = needHours - allHoursWork
        console.log(`Not enough time!${needMoreHours} hours needed.`)
    }






}
company(['90','7','3'])