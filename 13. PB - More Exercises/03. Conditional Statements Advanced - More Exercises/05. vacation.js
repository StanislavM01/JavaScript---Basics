function vocation(input){
    let budget = Number(input[0])
    let sesason = input[1]
    let accommodation 
    let place 

    if(budget <= 1000){
        accommodation = `Camp`
        switch(sesason){

            case `Summer`:
                place = `Alaska`
                budget = budget * 0.65
            break;

            case `Winter`:
                place = `Morocco`
                budget = budget * 0.45
            break;

        }
        
    }else if(budget > 1000 && budget <= 3000){
        accommodation = `Hut`
        switch(sesason){

            case `Summer`:
                place = `Alaska`
                budget = budget * 0.80
            break;

            case `Winter`:
                place = `Morocco`
                budget = budget * 0.60
            break;
        }

    }else{
        accommodation = `Hotel`
        switch(sesason){

            case `Summer`:
                place = `Alaska`
                budget = budget * 0.90
            break;

            case `Winter`:
                place = `Morocco`
                budget = budget * 0.90
            break;
        }
        
    }


    console.log(`${place} - ${accommodation} - ${(budget).toFixed(2)}`)




}
vocation([`3460`,`Summer`])