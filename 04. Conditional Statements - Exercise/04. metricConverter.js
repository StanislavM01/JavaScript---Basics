function metricCon(input){
    let number = Number(input[0])
    let first = (input[1])
    let second = (input[2])

    if(first === 'mm'&& second === 'm'){
        let numberone=(number / 1000).toFixed(3)
        console.log(numberone)

    }else if (first === 'm'&& second === 'mm'){
        let numbertwo = (number * 1000).toFixed(3)
        console.log(numbertwo)

    }else if (first === 'cm'&& second === 'm'){
        let numberthree = (number / 100).toFixed(3)
        console.log(numberthree)

    }else if (first === 'm'&& second === 'cm'){
        let numberfor = (number * 100).toFixed(3)
        console.log(numberfor)

    }else if (first === 'cm'&& second === 'mm'){
        let numberfive = (number * 10).toFixed(3)
        console.log(numberfive)

    }else if (first === 'mm'&& second === 'cm'){
        let numbersix = (number / 10).toFixed(3)
        console.log(numbersix)
    }



}
metricCon(["5000","cm","m"])