function car(input){
    let budget = Number(input[0])
    let season = input[1]
    let classAuto
    let auto

     if(budget <= 100){
         classAuto = `Economy class`
         if(season == `Summer`){
             budget = budget * 0.35
             auto = `Cabrio`
         }else if (season == `Winter`){
             budget = budget * 0.65
             auto = `Jeep`
         }

     }else if(budget > 100 && budget <= 500){
         classAuto = `Compact class`
         if(season == `Summer`){
            budget = budget * 0.45
            auto = `Cabrio`
         }else if (season == `Winter`){
            budget = budget * 0.80
            auto = `Jeep`
           
        }

     }else{
         classAuto = `Luxury class`
         auto = `Jeep`
         budget = budget * 0.9

     }


console.log(classAuto)
console.log(`${auto} - ${(budget).toFixed(2)}`)




}
car([`70.50`,`Winter`])