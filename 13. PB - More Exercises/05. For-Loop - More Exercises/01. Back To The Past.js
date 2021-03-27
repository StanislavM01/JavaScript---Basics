function backtothepast(input){
    let money = Number(input[0])
    let year = Number(input[1])
    let theCosts = 0
    let yearIvan = 18 - 1
    for(let i = 1800;i <= year;i++){
        if(i % 2 == 0){
            yearIvan += 1
            theCosts += 12000
        }else if(i % 2 != 0){
            yearIvan += 1
            theCosts += 12000 + (50 * yearIvan)

        }

    }
    
    if(money - theCosts >= 0){
        console.log(`Yes! He will live a carefree life and will have ${(money - theCosts).toFixed(2)} dollars left.`)
    }else if(money - theCosts < 0){
        console.log(`He will need ${(theCosts - money).toFixed(2)} dollars to survive.`)
    }





}
backtothepast([`100000.15`,`1808`])