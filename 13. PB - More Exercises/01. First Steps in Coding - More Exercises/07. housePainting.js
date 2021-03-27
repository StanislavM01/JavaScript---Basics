function housePainting(input){
let x = Number(input[0])
let y = Number(input[1])
let h = Number(input[2])

let wallFrontBack = ((x * x)*2) - 1.2 * 2
let sideWall = ((x * y)*2) - ((1.5 * 1.5)*2)      // stranichna stena
let roof = ((x * y)*2) + ((x * h / 2) * 2)
let greenPaint = (wallFrontBack + sideWall) / 3.4
let redPaint = roof / 4.3


console.log(greenPaint.toFixed(2))
console.log(redPaint.toFixed(2))


}
housePainting(['6','10','5.2'])