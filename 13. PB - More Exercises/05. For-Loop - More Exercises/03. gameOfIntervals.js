function game(input){
    let allHodove = Number(input[0])
    let score = 0
    let toNine = 0
    let toNineteen = 0
    let toTwentynine = 0
    let toThirtyNine = 0
    let toFifty = 0
    let invalid = 0
    for(let i = 1; i <= allHodove;i++){
        let oneHod = Number(input[i])
        if(oneHod >= 0 && oneHod <= 9 ){
            score += (oneHod * 20) / 100
            toNine += (10*10) / allHodove
        }else if(oneHod >= 10 && oneHod <= 19){
            score += (oneHod * 30) / 100
            toNineteen += (10*10) / allHodove
        }else if(oneHod >= 20 && oneHod <= 29){
            score += (oneHod * 40) / 100
            toTwentynine += (10*10) / allHodove
        }else if (oneHod >= 30 && oneHod <= 39){
            score += 50
            toThirtyNine += (10*10) / allHodove
        }else if (oneHod >= 40 && oneHod <= 50){
            score += 100
            toFifty += (10*10) / allHodove
        }else{
            score = score / 2
            invalid += (10*10) / allHodove
        }
    }
    console.log((score).toFixed(2))
    console.log(`From 0 to 9: ${toNine.toFixed(2)}%`)
    console.log(`From 10 to 19: ${toNineteen.toFixed(2)}%`)
    console.log(`From 20 to 29: ${toTwentynine.toFixed(2)}%`)
    console.log(`From 30 to 39: ${toThirtyNine.toFixed(2)}%`)
    console.log(`From 40 to 50: ${toFifty.toFixed(2)}%`)
    console.log(`Invalid numbers: ${invalid.toFixed(2)}%`)
    console.log()





}
game([`10`,`43`,`57`,`-12`,`23`,`12`,`0`,`50`,`40`,`30`,`20`,])