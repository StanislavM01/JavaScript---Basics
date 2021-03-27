function count(input){
    let text = input[0]
    let space = 0
    for(let i = 0; i < text.length; i++){
        if(text[i] == ` `){
            space += 1

        }
    }
    
    if(space + 1 > 10){
        console.log(`The message is too long to be send! Has ${space + 1} words.`)
    }else{
        console.log(`The message was send successfully!`)
    }
}
count(["This message has ten words and you can send it!"])