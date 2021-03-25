function swimming(input){
    let record = Number(input[0])
    let sizeInM = Number(input[1])
    let mForOneSec = Number(input[2])

    let timefor30m = (sizeInM * mForOneSec)
    let slow = Math.floor(sizeInM / 15) * 12.5
    let finalTime = (timefor30m + slow).toFixed(2)
    
    if (finalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${finalTime} seconds.`)

    }else{
        let razlika = (finalTime - record).toFixed(2)
        console.log(`No, he failed! He was ${razlika} seconds slower.`)
    }




}
swimming(["55555.67",
"3017",
"5.03"])

