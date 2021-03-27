function volleyball(input){
    let leapOrNo = input[0]
    let p = Number(input[1])
    let h = Number(input[2])

    let result = 48 - h
    let holidayInSofia = (result / 4) * 3

    let praznici =  (p / 3) * 2
    let finallgames = holidayInSofia + h + praznici
     switch(leapOrNo){
         case `leap`:
             let leapyear = Math.floor(finallgames * 1.15)
             console.log(leapyear)
             break;
         case `normal`:
            console.log(Math.floor(finallgames)) 
            break;

     }





}
volleyball(["normal",
"11",
"6"])



