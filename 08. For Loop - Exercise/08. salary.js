function solary(input){
    let n = Number(input[0])
    let money = Number(input[1])
    let index = 2

    for(let i = 1;i <= n;i++){
        let site = input[index]
          index++
        if(site == `Facebook` && money >= 150){
            money -= 150
        }else if(site == `Instagram` && money >= 100){
            money -= 100

        }else if(site == `Reddit` && money >= 50){
            money -= 50

        }

    }
    if(money < 150){
        console.log(`You have lost your salary.`)
    }else{
        console.log(money)
    }








}
solary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


