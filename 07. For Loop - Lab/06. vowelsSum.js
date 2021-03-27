function sum(input){
    let text = input[0]
    let result = 0
    for(let i = 0; i < text.length; ++i){
        let word = text[i]
        if(word == `a`){
            result = result + 1

        }if(word == `e`){
            result = result + 2

        }if(word == `i`){
            result = result + 3

        }if(word == `o`){
            result = result + 4

        }if(word == `u`){
            result = result + 5

        }
    }
    console.log(result)
    





}
sum(["bamboo"])