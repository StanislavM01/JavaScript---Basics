function school(input){
    let season = input[0]
    let typeGroup = input[1]
    let numbSchooler = Number(input[2])
    let numbOvernight = Number(input[3]) // overnight - noshtuvka
    let result = 0
    let sports = ``

    switch(season){
        case `Winter`:
            switch(typeGroup){
                case `boys`:
                    result = numbOvernight * 9.6 * numbSchooler
                break;

                case `girls`:
                    result = numbOvernight * 9.6 * numbSchooler
                break;

                case `mixed`:
                    result = numbOvernight * 10 * numbSchooler
                break;


            }
        break;
        case `Spring`:
            switch(typeGroup){
                case `boys`:
                    result = numbOvernight * 7.2 * numbSchooler
                break;

                case `girls`:
                    result = numbOvernight * 7.2 * numbSchooler
                break;

                case `mixed`:
                    result = numbOvernight * 9.5 * numbSchooler
                break;

            }
        break;
        case `Summer`:
            switch(typeGroup){
                case `boys`:
                    result = numbOvernight * 15 * numbSchooler
                break;

                case `girls`:
                    result = numbOvernight * 15 * numbSchooler
                break;

                case `mixed`:
                    result = numbOvernight * 20 * numbSchooler
                break;

            }
        break;

    }
    if(numbSchooler >= 50){
        result = result * 0.5
    }else if(numbSchooler >= 20 && numbSchooler < 50){
        result = result * 0.85
    }else if( numbSchooler >= 10 && numbSchooler < 20){
        result = result * 0.95
    }

    switch(season){
        case `Winter`:
            switch(typeGroup){
                case `boys`:
                    sports = `Judo`
                break;

                case `girls`:
                    sports = `Gymnastics`
                break;

                case `mixed`:
                    sports = `Ski`
                break;
            }
        break;

        case `Spring`:
            switch(typeGroup){
                case `boys`:
                    sports = `Tennis`
                break;

                case `girls`:
                    sports = `Athletics`
                break;

                case `mixed`:
                    sports = `Cycling`
                break;
            }
        break;
        case `Summer`:
            switch(typeGroup){
                case `boys`:
                    sports = `Football`
                break;

                case `girls`:
                    sports = `Volleyball`
                break;

                case `mixed`:
                    sports = `Swimming`
                break;
            }
        break;

    }
console.log(`${sports} ${(result).toFixed(2)} lv.`)



}
school([`Winter`,`mixed`,`9`,`15`])