function trainingLab(input){
    let w = Number(input[0]) // daljina
    let h = Number(input[1]) // shirochina
    let hInCm = h * 100
    let clearH = hInCm - 100
    let table = Math.floor(clearH / 70)
    

    let wInCM = w * 100
    let redove = Math.floor(wInCM / 120)
    
    let broiMesta = (table * redove) - 3
    console.log(broiMesta)

    




}
trainingLab(['8.4','5.2'])