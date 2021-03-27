function tanktwo(input){
    let typeOil = input[0];
    let quanOil = Number(input[1]);
    let haveClubCard = input[2];
    let final;

    if(haveClubCard == 'Yes' && typeOil == 'Gasoline'){
        final = quanOil * (2.22 - 0.18);
        
    }else if(haveClubCard == 'No' && typeOil == 'Gasoline'){
        final = quanOil * 2.22;
       
    }else if(haveClubCard == 'Yes' && typeOil == 'Diesel'){
        final = quanOil * (2.33 - 12);
        
    }else if(haveClubCard == 'No' && typeOil == 'Diesel'){
        final = quanOil * 2.33;
        
    }else if(haveClubCard == 'Yes' && typeOil == 'Gas'){
        final = quanOil * (0.93 - 0.08);
        
    }else if(haveClubCard == 'No' && typeOil == 'Gas'){
        final = quanOil * 0.93;
    }
    if (quanOil >= 20 && quanOil <= 25){
        let finalPrice = (final * 0.92).toFixed(2);  
        console.log(`${finalPrice} lv.`);
    }else if (quanOil > 25){
        let finalPrice = (final * 0.90).toFixed(2);
        console.log(`${finalPrice} lv.`);
    }else if (quanOil < 20){
        let finalPrice = (final).toFixed(2);
        console.log(`${finalPrice} lv.`);
    }



}
tanktwo(['Gas','19','Yes'])
