function skin(input){
    let day = Number(input[0])
    let typeRoom = (input[1])
    let assessment = (input[2])
    let pay = 0

    if(day < 10){
        if(typeRoom == `room for one person`){
            pay = (day -1)*18.00
        }else if(typeRoom == `apartment`){
            pay = ((day -1) * 25.00)*0.70
        }else{
            pay = ((day - 1)*35.00) * 0.90
        }

    }else if(day >= 10 && day <= 15){
        if(typeRoom == `room for one person`){
            pay = (day -1)*18.00
        }else if(typeRoom == `apartment`){
            pay = ((day -1) * 25.00)*0.65
        }else{
            pay = ((day - 1)*35.00) * 0.85
        }

    }else{
        if(typeRoom == `room for one person`){
            pay = (day -1)*18.00
        }else if(typeRoom == `apartment`){
            pay = ((day -1) * 25.00)*0.50
        }else{
            pay = ((day -1) * 35.00)*0.80
        }

    }
    if(assessment == `positive`){
        let positiv = pay * 0.25
        console.log((positiv + pay).toFixed(2))
    }else if(assessment == `negative`){
        let negative = pay * 0.90
        console.log((negative).toFixed(2))
    }






}
skin(["12",
"room for one person",
"positive"])

