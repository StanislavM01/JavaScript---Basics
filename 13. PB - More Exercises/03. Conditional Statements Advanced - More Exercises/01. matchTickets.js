function tickets(input){
    let budget = Number(input[0])
    let category = input[1]
    let numbBoys = input[2]
    let tickets = 0
    switch(category){
        case `Normal`:
            tickets = 249.99
            if(numbBoys >= 1 && numbBoys <= 4){
                budget = budget * 0.25
            }else if(numbBoys >= 5 && numbBoys <= 9){
                budget = budget * 0.4
            }else if (numbBoys >= 10 && numbBoys <= 24){
                budget = budget * 0.5
            }else if (numbBoys >= 25 && numbBoys <= 49){
                budget = budget * 0.6
            }else{
                budget = budget * 0.75
            }break;
            
        case `VIP`:
            tickets = 499.99
            if(numbBoys >= 1 && numbBoys <= 4){
                budget = budget * 0.25
            }else if(numbBoys >= 5 && numbBoys <= 9){
                budget = budget * 0.4
            }else if (numbBoys >= 10 && numbBoys <= 24){
                budget = budget * 0.5
            }else if (numbBoys >= 25 && numbBoys <= 49){
                budget = budget * 0.6
            }else{
                budget = budget * 0.75
            }break;


    }

if(budget >= numbBoys * tickets){
    let leftmoney = (budget - tickets * numbBoys).toFixed(2)
    console.log(`Yes! You have ${leftmoney} leva left.`)
}else if (budget <= numbBoys * tickets){
    let needMoney = ((numbBoys * tickets) - budget).toFixed(2)
    console.log(`Not enough money! You need ${needMoney} leva.`)
}


}
tickets([`1000`,`Normal`,`1`])