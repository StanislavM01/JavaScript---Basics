function divisible(input){
    let numb1 = Number(input[0])
    let numb2 = Number(input[1])
    let result = 0
    for(let i = numb1; i <= numb2;++i){
        

        
        if(i % 9 == 0){
            result = result + i
            
            
         
            
            
        }


    }
    console.log(`The sum: ${result}`)
    for(let i = numb1; i <= numb2;++i){
        

        
        if(i % 9 == 0){
            console.log(i)
            
         
            
            
        }


    }
    





}
divisible([`100`,`200`])