function driver(input){
    let season = input[0]
    let kmForMounth = Number(input[1])
    let result
    if(kmForMounth <= 5000){
     switch(season){
         case `Spring`:
         result = kmForMounth * 0.75
         break;

         case `Summer`:
         result = kmForMounth * 0.90
         break;

         case `Autumn`:
         result = kmForMounth * 0.75
         break;

         case `Winter`:
         result = kmForMounth * 1.05
         break;

        }

    }else if (kmForMounth > 5000 && kmForMounth <= 10000){
        switch(season){
            case `Spring`:
            result = kmForMounth * 0.95
            break;
   
            case `Summer`:
            result = kmForMounth * 1.10
            break;
   
            case `Autumn`:
            result = kmForMounth * 0.95
            break;
   
            case `Winter`:
            result = kmForMounth * 1.25
            break;
   
        }
    }else{
        result = kmForMounth * 1.45
    }
    result = ((result * 4)* 0.90).toFixed(2)
    console.log(result)



}
driver([`Winter`,`5678`])