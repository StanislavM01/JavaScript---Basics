function comissions(input){
    let city = (input[0])
    let quality = Number(input[1])
    let result

    if(quality > 0 && quality <= 500){
        switch(city){
            case `Sofia`: console.log((quality * 0.05).toFixed(2)); break;
            case `Varna`: console.log((quality * 0.045).toFixed(2)); break;
            case `Plovdiv`: console.log((quality * 0.055).toFixed(2)); break;
            default: console.log(`error`);
        }
    }else if (quality > 500 && quality <= 1000){
        switch(city){
            case `Sofia`: console.log((quality * 0.07).toFixed(2)); break;
            case `Varna`: console.log((quality * 0.075).toFixed(2)); break;
            case `Plovdiv`: console.log((quality * 0.08).toFixed(2)); break;
            default: console.log(`error`);
        }
    }else if (quality > 1000 && quality <= 10000){
        switch(city){
            case `Sofia`: console.log((quality * 0.08).toFixed(2)); break;
            case `Varna`: console.log((quality * 0.10).toFixed(2)); break;
            case `Plovdiv`: console.log((quality * 0.12).toFixed(2)); break;
            default: console.log(`error`);
        }
    }else if (quality > 10000){
        switch(city){
            case `Sofia`: console.log((quality * 0.12).toFixed(2)); break;
            case `Varna`: console.log((quality * 0.13).toFixed(2)); break;
            case `Plovdiv`: console.log((quality * 0.145).toFixed(2)); break;
            default: console.log(`error`);
        }
    }else{
        console.log(`error`)
    }


}
comissions(["Kaspichan",
"-50"])
