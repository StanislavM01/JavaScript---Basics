function time(input){
    let hourExam = Number(input[0])
    let minExam = Number(input[1])
    let hourComming = Number(input[2])
    let minComming = Number(input[3])
    let hourInMin = hourExam * 60
    let hourInMinCom = hourComming * 60

    let timeForStartExamMin = hourInMin + minExam

    
  
    
    let timeOnComming = hourInMinCom + minComming

    let onTime = timeForStartExamMin - 30
    if(timeForStartExamMin < timeOnComming){
        console.log(`Late`)
        let diff = timeOnComming - timeForStartExamMin
        if(diff < 60){
            console.log(`${diff} minutes after the start`)
        }else{
            let h = Math.floor(diff / 60)
            let m = diff % 60
            if(m < 10){
                console.log(`${h}:0${m} hours after the start`)
            }else{
                console.log(`${h}:${m} hours after the start`)
            }
        }
    }else if(timeOnComming == timeForStartExamMin || timeForStartExamMin - timeOnComming <= 30){
        console.log(`On time`)
        if(timeForStartExamMin - timeOnComming != 0){
            let diff = timeForStartExamMin - timeOnComming
            console.log(`${diff} minutes before the start`)
        }
    }else{
        console.log(`Early`)
        let diff = timeForStartExamMin - timeOnComming
        if(diff < 60){
            console.log(`${diff} minutes before the start`)
        }else{
            let h = Math.floor(diff / 60)
            let m = diff % 60
            if(m < 10){
                console.log(`${h}:0${m} hours before the start`)
            }else{
                console.log(`${h}:${m} hours before the start`)
            }
        }
    }





}
time(["14",
"00",
"13",
"55"])





