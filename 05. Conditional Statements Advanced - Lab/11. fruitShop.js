function fruit(input){
    let fruit = (input[0])
    let day = (input[1])
    let quality = Number(input[2])
    let result = 0

    if(day == `Monday`|| day == `Tuesday`|| day == `Wednesday` || day == `Thursday` || day == `Friday`){
        switch(fruit){
            case `banana`: console.log((2.5 * quality).toFixed(2)); break;
            case `apple`: console.log((1.2 * quality).toFixed(2)); break;
            case `orange`: console.log((0.85 * quality).toFixed(2)); break;
            case `grapefruit`: console.log((1.45 * quality).toFixed(2)); break;
            case `kiwi`: console.log((2.7 * quality).toFixed(2)); break;
            case `pineapple`: console.log((5.5 * quality).toFixed(2)); break;
            case `grapes`: console.log((3.85 * quality).toFixed(2)); break;
            default: console.log(`error`)
        }

    }else if(day == `Saturday`|| day == `Sunday`){
        switch(fruit){
            case `banana`: console.log((2.7 * quality).toFixed(2)); break;
            case `apple`: console.log((1.25 * quality).toFixed(2)); break;
            case `orange`: console.log((0.90 * quality).toFixed(2)); break;
            case `grapefruit`: console.log((1.60 * quality).toFixed(2)); break;
            case `kiwi`: console.log((3.00 * quality).toFixed(2)); break;
            case `pineapple`: console.log((5.6 * quality).toFixed(2)); break;
            case `grapes`: console.log((4.20 * quality).toFixed(2)); break;
            default: console.log(`error`)
        }
    }else{
        console.log(`error`)
    }



}
fruit(["tomato",
"Monday",
"0.5"])


