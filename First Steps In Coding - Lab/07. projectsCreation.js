function hourstoproject(input){
    let architectname = input[0]
    let numberproject = Number(input[1])
    let needhourstocopleteprojetct = Number(input[1]) * 3
    console.log(`The architect ${architectname} will need ${needhourstocopleteprojetct} hours to complete ${numberproject} project/s.`)

}
hourstoproject(['Stanislav','15']);