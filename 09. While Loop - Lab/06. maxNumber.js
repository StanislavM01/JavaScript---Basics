function maxnumber(input){
    let index = 0
    let command = input[index]
    let max = Number.MIN_SAFE_INTEGER
    while(command != `Stop`){
        let num = Number(command)
        if(num > max){
            max = num
        }


        index++
        command = input[index]
        


    }
    console.log(max)
}
maxnumber(["100",
"99",
"80",
"70",
"Stop"])

