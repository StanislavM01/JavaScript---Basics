function greening(input){
    let areaforgreening = Number(input[0])
    let priceforgreening = areaforgreening * 7.61
    let pricefordiscount = priceforgreening * 0.18
    let finalpriceforgreening = priceforgreening - pricefordiscount

    console.log(`The final price is: ${finalpriceforgreening} lv.`)
    console.log(`The discount is: ${pricefordiscount} lv.`)

}
greening(['5000'])