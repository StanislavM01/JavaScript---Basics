function cinema(input){

    let project = input[0]
    let r = Number(input[1])
    let c = Number(input[2])
    let result = 0
     switch(project){
         case `Premiere`: 
         result = (r * c * 12).toFixed(2)
         console.log(`${result} leva`)
         break; 

         case `Normal`:
            result = (r * c * 7.5).toFixed(2)
            console.log(`${result} leva`)
            break; 
             
         case `Discount`:
            result = (r * c * 5).toFixed(2)
            console.log(`${result} leva`)
            break; 




     }
    




}
cinema(["Discount",
"12",
"30"])

