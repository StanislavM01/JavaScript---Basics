function areaPerimeter(input){
    let r = Number(input[0])
    let areaCircle = Math.PI * (r*r)
    let perimetarCircle = 2 * Math.PI * r
    console.log(areaCircle.toFixed(2))
    console.log(perimetarCircle.toFixed(2))


}
areaPerimeter([5])