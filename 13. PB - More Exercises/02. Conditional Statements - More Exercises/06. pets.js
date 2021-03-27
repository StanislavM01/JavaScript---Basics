function pet(input){
    let days = Number(input[0])
    let allfood = Number(input[1])
    let foodDog = Number(input[2])
    let foodCat = Number(input[3])
    let foodTurtle = Number(input[4])

    let allfoodNeedToAnimalForAllDays = (foodDog + foodCat + (foodTurtle / 1000)) * days
    if(allfood >= allfoodNeedToAnimalForAllDays){
        let leftfood = Math.floor(allfood - allfoodNeedToAnimalForAllDays)
        console.log(`${leftfood} kilos of food left.`)

    }else{
        let needFood = Math.ceil(allfoodNeedToAnimalForAllDays - allfood)
        console.log(`${needFood} more kilos of food are needed.`)
    }



}
pet(['5','10','2.1','0.8','321'])