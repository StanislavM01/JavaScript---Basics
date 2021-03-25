function lica(input){
let figura = (input[0])
let a = Number(input[1])
let b = Number(input[2])
if (figura == 'square'){
    console.log((a * a).toFixed(3))
}
if (figura == 'rectangle'){
    console.log((a * b).toFixed(3))

}
if (figura == 'circle'){
    console.log((Math.PI * (a * a)).toFixed(3))
}
if (figura == 'triangle'){
    console.log(((a * b) / 2).toFixed(3))
}


}
lica(["square", "5"])