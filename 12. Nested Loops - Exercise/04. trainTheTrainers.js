function train(input){
    let i = 0
    let numbJury = Number(input[i])
    let averageOcenka = 0
    let ocenki = 0
    let numbOfOcenki = 0
    let command = ``
    i++
    
    

    while(command != `Finish`){
        let namePres = input[i]
        i++
        for(let q = 1; q <= numbJury;q++){
            command = input[i]
            i++
            ocenki += Number(command)


        }
        averageOcenka += ocenki / numbJury
        numbOfOcenki++
    console.log(`${namePres} - ${(ocenki / numbJury).toFixed(2)}.`)
    ocenki = 0
    command = input[i]



    }
    averageOcenka = averageOcenka / numbOfOcenki
    console.log(`Student's final assessment is ${(averageOcenka).toFixed(2)}.`)
    

}
train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


