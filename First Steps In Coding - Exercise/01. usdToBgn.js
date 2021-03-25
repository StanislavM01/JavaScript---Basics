function usdToBgn(input){
    let amountusd = Number(input[0]); //22 dolara
    let oneUsdToBgn = 1.79549; // 1 dolar=1.79 leva
    let finalTransaction = amountusd * oneUsdToBgn
    console.log(finalTransaction)




}
usdToBgn(['22'])