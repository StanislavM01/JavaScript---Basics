function tank(input){
    let typeOil = input[0]
    let oilLit = Number(input[1])

    if(oilLit >= 25 && typeOil == 'Diesel'){
        console.log(`You have enough diesel.`)
    }else if(oilLit < 25 && typeOil == 'Diesel'){
        console.log(`Fill your tank with diesel!`)
    }else if(oilLit >= 25 && typeOil == 'Gasoline'){
        console.log(`You have enough gasoline.`)
    }else if (oilLit < 25 && typeOil == 'Gasoline'){
        console.log(`Fill your tank with gasoline!`)
    }else if (oilLit >= 25 && typeOil == 'Gas'){
        console.log(`You have enough gas.`)
    }else if (oilLit < 25 && typeOil == 'Gas'){
        console.log(`Fill your tank with gas!`)
    }else{
        console.log(`Invalid fuel!`)
    }





}
tank(['Kerosene','200'])