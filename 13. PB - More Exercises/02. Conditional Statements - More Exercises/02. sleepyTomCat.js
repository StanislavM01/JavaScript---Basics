function cat(input){
    let holiday = Number(input[0])
    let playInHol = 127 * holiday
    let workDay = 365 - holiday
    let playWorkDay = workDay * 63
    let allTimeplay = playInHol + playWorkDay

    if(alltimeplay > 30000){
        let  moreTime = allTimeplay - 30000
        let moreTimeHour = Math.floor(moretime / 60)
        let moreTimeMin = (moretime % 60)
        console.log(`Tom will run away`)
        console.log(`${moreTimeHour} hours and ${moreTimeMin} minutes more for play`)
    }else{
        let lessTime = 30000 - allTimeplay
        let lessTimeHour = Math.floor(lessTime / 60)
        let lessTimeMin = (lesstime % 60)
        console.log(`Tom sleeps well`)
        console.log(`${lessTimeHour} hours and ${lessTimeMin} minutes less for play`)
    }




}
cat(['113'])