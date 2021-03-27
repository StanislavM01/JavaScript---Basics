function multiple(input){
    let i = 0
    let number = Number(input[i])
    while(number >= 0){
        console.log(`Result: ${(number * 2).toFixed(2)}`)
        i++
        number = Number(input[i])

    }
    if(number < 0){
        console.log(`Negative number!`)
    }





}
multiple([`12`,`43.2144`,`12.3`,`543.23`,`-20`])