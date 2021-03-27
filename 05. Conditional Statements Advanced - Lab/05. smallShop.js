function shop(input){
    let item = (input[0])
    let city = (input[1])
    let qual = Number(input[2])

    if(city == `Sofia`){
        if(item == `coffee`){
            console.log((qual * 0.50).toFixed(2))
        }else if (item == `water`){
            console.log((qual * 0.80).toFixed(2))
        }else if (item == `beer`){
            console.log((qual * 1.20).toFixed(2))
        }else if (item == `sweets`){
            console.log((qual * 1.45).toFixed(2))
        }else{
            console.log((qual * 1.60).toFixed(2))
        }

  }else if(city == `Varna`){
      if(item == `coffee`){
        console.log((qual * 0.45).toFixed(2))
      }else if (item == `water`){
        console.log((qual * 0.70).toFixed(2))
      }else if (item == `beer`){
        console.log((qual * 1.10).toFixed(2))
      }else if (item == `sweets`){
        console.log((qual * 1.35).toFixed(2))
      }else{
        console.log((qual * 1.55).toFixed(2))
    }

 }else{
     if(item == `coffee`){
        console.log((qual * 0.40).toFixed(2))
     }else if (item == `water`){
        console.log((qual * 0.70).toFixed(2))
     }else if (item == `beer`){
        console.log((qual * 1.15).toFixed(2))
     }else if (item == `sweets`){
        console.log((qual * 1.30).toFixed(2))
     }else{
        console.log((qual * 1.50).toFixed(2))
    }
 }


}
shop(["peanuts",
"Plovdiv",
"1"])

