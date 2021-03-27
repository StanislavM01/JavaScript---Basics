function pipes(input){
    let vpool = Number(input[0])
    let p1 =  Number(input[1])
    let p2 = Number(input[2])
    let H = Number(input[3])
    let forAllHoursp1 = p1 * H
    let forAllHoursp2 = p2 * H
    let percentToTp1 = (forAllHoursp1 / vpool) * 100
    let percentToTp2 = (forAllHoursp2 / vpool) * 100
    let allLiters = forAllHoursp1 + forAllHoursp2
    let litterSp1 = ((forAllHoursp1 / allLiters) * 100).toFixed(2)
    let litterSp2 = ((forAllHoursp2 / allLiters) * 100).toFixed(2)
    
    
        
        if (percentToTp1 + percentToTp2 <= 100){
            let allprocent = (percentToTp2 + percentToTp1).toFixed(2)
            console.log(`The pool is ${allprocent}% full. Pipe 1: ${litterSp1}%. Pipe 2: ${litterSp2}%.`)
        }else{
            let moreLit = (forAllHoursp1 + forAllHoursp2) - vpool
            console.log(`For ${H} hours the pool overflows with ${moreLit} liters.`)
        }




}
pipes(['1000','100','120','3'])                         