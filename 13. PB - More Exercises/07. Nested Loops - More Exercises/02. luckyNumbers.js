function happynumber(input){
    let n = Number(input[0])
    let flag = false
    let theNumber =``

    for(let i = 1; i <= 9; i++){
        for(let q = 1; q <= 9; q++){ 
            for(let s = 1; s <= 9; s++){
                for(let w = 1; w <= 9; w++){
                    if(n % (i+q) == 0){
                        if(i+q == s+w){
                            theNumber += `${i}${q}${s}${w} `
                        }
                    }
                        
                    

                    
                    



              

                }
    
            }
        }

    }
    console.log(theNumber)




}
happynumber([`3`])