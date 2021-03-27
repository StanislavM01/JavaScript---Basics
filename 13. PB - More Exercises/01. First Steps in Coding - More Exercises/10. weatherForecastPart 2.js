function forecast(input){
    let celsium = Number(input[0])
    
    if (celsium <= 11.9)
    console.log('Cold')
    else if (celsium >= 12,celsium <= 14.9){
        console.log('Cool')
    }
    else if (celsium >= 15,celsium <= 20){
        console.log('Mild')
    }
    else if(celsium >= 20.01,celsium <= 25.90){
        console.log('Warm')
    }
    else if (celsium >= 26, celsium <= 35){
        console.log('Hot')
    }
    else{
        console.log("unknown")
    }

  
}
forecast(['15'])