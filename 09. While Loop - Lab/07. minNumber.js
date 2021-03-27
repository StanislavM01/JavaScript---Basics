function minnumber(input){
    let index = 0
    let command = input[index]
    let min = Number.MAX_SAFE_INTEGER
    while(command != `Stop`){
        let num = Number(command)
        if(num < min){
            min = num
        }


        index++
        command = input[index]
        


    }
    console.log(min)
}
minnumber(["100",
"99",
"80",
"70",
"Stop"])
