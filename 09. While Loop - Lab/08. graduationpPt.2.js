function finish(input){
    let name = input[0]
    let i = 1
    let number = Number(input[i])
    let grade = 1
    let regularResult = 0
    while(number >= 4.00){
        regularResult += number
        i++
        number = Number(input[i])
    if(grade == 12){
        regularResult = regularResult / 12
        console.log(`${name} graduated. Average grade: ${regularResult.toFixed(2)}`)
        break;

    }
    grade++
}


    if(number < 4.00){
        console.log(`${name} has been excluded at ${grade} grade`)
    }
   




}
finish(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
