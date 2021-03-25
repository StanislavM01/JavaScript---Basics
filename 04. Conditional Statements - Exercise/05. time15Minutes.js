function time(input){
    let h = Number(input[0])
    let m = Number(input[1])
    let totalminute = h * 60 + m
    let totalminafter = totalminute + 15
    let finalh = Math.floor(totalminafter / 60)
    if(finalh > 23){
        finalh = 0
    }
    let finalmin = totalminafter % 60
    if(finalmin < 10){
        console.log(`${finalh}:0${finalmin}`)
    }else{
        console.log(`${finalh}:${finalmin}`)
    }





}
time(["23", "45"])