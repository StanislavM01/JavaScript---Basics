function summer(input){
    let celsium = Number(input[0])
    let time = input[1]
    let outfit = ``
    let shoes = ``
    switch(time){
        case `Morning`:
            if(celsium >= 10 && celsium <= 18){
                shoes = `Sneakers` 
                outfit = `Sweatshirt`

            }else if(celsium > 18 && celsium <= 24){
                shoes = `Moccasins` 
                outfit = `Shirt`
            }else{
                shoes = `Sandals` 
                outfit = `T-Shirt`

            }
        break;
        case `Afternoon`:
            if(celsium >= 10 && celsium <= 18){
                shoes = `Moccasins` 
                outfit = `Shirt`

            }else if(celsium > 18 && celsium <= 24){
                shoes = `Sandals` 
                outfit = `T-Shirt`
            }else{
                shoes = `Barefoot` 
                outfit = `Swim Suit`

            }
        break;
        case `Evening`:
            if(celsium >= 10 && celsium <= 18){
                shoes = `Moccasins` 
                outfit = `Shirt`

            }else if(celsium > 18 && celsium <= 24){
                shoes = `Moccasins` 
                outfit = `Shirt`
            }else{
                shoes = `Moccasins` 
                outfit = `Shirt`

            }
        break;

    }

console.log(`It's ${celsium} degrees, get your ${outfit} and ${shoes}.`)



}
summer(["22",
"Afternoon"])

