function coins(input){

    let moneyInBgn = Number(input[0])
    let moneyInCoin = (moneyInBgn * 100).toFixed(0)
    let counter = 0

    while(moneyInCoin > 0){
        if(moneyInCoin >= 200){
            moneyInCoin -= 200
            counter++
        }else if(moneyInCoin >= 100){
            moneyInCoin -= 100
            counter++
        }else if (moneyInCoin >= 50){
            moneyInCoin -= 50
            counter++
        }else if(moneyInCoin >= 20){
            moneyInCoin -= 20
            counter++
        }else if(moneyInCoin >= 10){
            moneyInCoin -= 10
            counter++
        }else if(moneyInCoin >= 5){
            moneyInCoin -= 5
            counter++
        }else if (moneyInCoin >= 2){
            moneyInCoin -= 2
            counter++
        }else if(moneyInCoin >= 1){
            moneyInCoin -= 1
            counter++
        }

    }

    
    console.log(counter)





}
coins(["0.56"])