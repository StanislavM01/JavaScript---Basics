function letters(input){
    let i = 0
    let word = input[i]
    let fullWord = ``
    while(word != `End`){
        if(word != `n` && word != `c` && word != `o` ){
            fullWord += `${word} `
        }
        i++
        word = input[i]


    }
    console.log(fullWord)




}
letters([`H`,`n`,`e`,`l`,`l`,`o`,`o`,`c`,`t`,`c`,`h`,`o`,`e`,`r`,`e`,`n`,`e`,`End`])