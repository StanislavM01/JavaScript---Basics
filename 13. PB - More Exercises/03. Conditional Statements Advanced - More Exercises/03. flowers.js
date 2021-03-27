function flower(input){
    let chrysanthemums = Number(input[0])
    let rose = Number(input[1])
    let tulips = Number(input[2])
    let season = input[3]
    let holiday = input[4]
    let result = 0
    let chrysprice = 0
    let rosePrice =  0
    let tulipsPrice = 0
    let flowerAllNumb = chrysanthemums + rose + tulips
    
    switch(season){
        case `Spring`:
            chrysprice = 2.00
            rosePrice = 4.10
            tulipsPrice = 2.5

            if(holiday == `Y`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
                result = result * 1.15
            }else if (holiday == `N`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
             }
             if(tulips > 7){
                 result = result * 0.95
             }
             if(flowerAllNumb > 20){
                 result = result * 0.8
             }
        break;

        case `Summer`:
            chrysprice = 2.00
            rosePrice = 4.10
            tulipsPrice = 2.5

            if(holiday == `Y`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
                result = result * 1.15
            }else if (holiday == `N`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
             }
             if(flowerAllNumb > 20){
                result = result * 0.8
            }
        break;

        case `Autumn`:
            chrysprice = 3.75
            rosePrice = 4.50
            tulipsPrice = 4.15
            if(holiday == `Y`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
                result = result * 1.15
            }else if (holiday == `N`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
             }
             if(flowerAllNumb > 20){
                result = result * 0.8
            }
        break;

        case `Winter`:
            chrysprice = 3.75
            rosePrice = 4.50
            tulipsPrice = 4.15
            if(holiday == `Y`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
                result = result * 1.15
            }else if (holiday == `N`){
                result = chrysprice * chrysanthemums + rosePrice * rose + tulips * tulipsPrice
             }
             if(rose >= 10){
                 result = result * 0.90
             }
             if(flowerAllNumb > 20){
                result = result * 0.8
            }
        break;

    }


console.log((result + 2).toFixed(2))


}
flower([`3`,`10`,`9`,`Winter`,`N`])