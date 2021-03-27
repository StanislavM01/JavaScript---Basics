function numbers(input){
    let a = Number(input[0])
    let sum = 0
    let index = 1
  let number = Number(input[index])
    while(true){
        sum += number
        index++
        number = Number(input[index])
        if (sum >= a){
            break
        }

    
    }
    console.log(sum)
    





}
numbers(["100",
"10",
"20",
"30",
"40"])

