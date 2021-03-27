function bills(input){
    let mounth = Number(input[0])
    let priceWater = 20 
    let priceInternet = 15 
    let anotherCost = 0
    let priceElectrick = 0
    let allCostforMounth = 0
    for(let i = 1; i <= mounth;i++){
        priceElectrick += Number(input[i])
        let eletrickPrice = Number(input[i])
        anotherCost += (((priceWater  + priceInternet  + eletrickPrice) * 20) / 100) + priceWater + priceInternet + eletrickPrice
       
    }
    allCostforMounth = (priceWater * mounth + priceInternet * mounth + priceElectrick + anotherCost) / mounth
    

    
console.log(`Electricity: ${priceElectrick.toFixed(2)} lv`)
console.log(`Water: ${(priceWater * mounth).toFixed(2)} lv`)
console.log(`Internet: ${(priceInternet * mounth).toFixed(2)} lv`)
console.log(`Other: ${anotherCost.toFixed(2)} lv`)
console.log(`Average: ${allCostforMounth.toFixed(2)} lv`)


}
bills([`5`,`68.63`,`89.25`,`132.53`,`93.53`,`63.22`,])