function bike(input){
    let juniorBike = Number(input[0])
    let seniorBike = Number(input[1])
    let trase = input[2]
    let juniorTax = 0
    let seniorTax = 0
    let result = 0
    switch(trase){
        case `trail`:
            juniorTax = juniorBike * 5.5
            seniorTax = seniorBike * 7
            result = (juniorTax + seniorTax) * 0.95
        break;
        case `cross-country`:
            juniorTax = juniorBike * 8
            seniorTax = seniorBike * 9.5
            result = (juniorTax + seniorTax)
            if(juniorBike + seniorBike >= 50){
                result = result * 0.75

            }
            result = result * 0.95
        break;
        case `downhill`:
            juniorTax = juniorBike * 12.25
            seniorTax = seniorBike * 13.75
            result = (juniorTax + seniorTax) * 0.95
        break;

        case `road`:
            juniorTax = juniorBike * 20
            seniorTax = seniorBike * 21.50
            result = (juniorTax + seniorTax) * 0.95
        break;

    }

console.log((result).toFixed(2))



}
bike([`20`,`25`,`cross-country`])