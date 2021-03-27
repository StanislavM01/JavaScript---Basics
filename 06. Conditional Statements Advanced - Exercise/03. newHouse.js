function house(input){
    let flower = (input[0])
    let numbFlow = Number(input[1])
    let budget = Number(input[2])
    let result = 0
    if(flower == `Roses`){
        if(numbFlow > 80){
     result = (numbFlow * 5)*0.90
    }else{
        result = (numbFlow * 5)
    }


}else if(flower == `Tulips`){
        if(numbFlow > 80){
        result = (numbFlow * 2.80)*0.85
    }else{
        result = (numbFlow * 2.80)
    }

}else if(flower == `Dahlias`){
        if(numbFlow > 90){
        result = (numbFlow * 3.80)*0.85
    }else{
       result = numbFlow * 3.80
    }


}else if (flower == `Narcissus`){
        if(numbFlow < 120){
        result = (numbFlow * 3)*1.15
    }else{
        result = (numbFlow * 3)
    }

}else if (flower == `Gladiolus`){
        if(numbFlow < 80){
        result = (numbFlow * 2.5)*1.20
    }else{
        result = numbFlow * 2.5
    }


}
if(budget >= result){
    let leftsum = 0
    leftsum = (budget - result).toFixed(2)
    console.log(`Hey, you have a great garden with ${numbFlow} ${flower} and ${leftsum} leva left.`)
}else{
    let needsum = 0
    needsum = (result - budget).toFixed(2)
    console.log(`Not enough money, you need ${needsum} leva more.`)
}



}
house(["Dahlias",
"112",
"460"])

