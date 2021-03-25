function radians (input){
    let radian = Number(input[0])
    result = radian * 180 / Math.PI
    console.log(result.toFixed(0))

}
radians(['5.1578'])