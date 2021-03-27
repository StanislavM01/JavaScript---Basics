function trapeziodrea (input){
    let b1 = Number(input[0])
    let b2 = Number(input[1])
    let h = Number(input[2])
    let formOfAreaFortrapeziod = (b1 + b2) * h / 2
    console.log(formOfAreaFortrapeziod.toFixed(2))


}
trapeziodrea(['6','4','10']);