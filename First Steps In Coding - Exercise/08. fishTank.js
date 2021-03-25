function aquarium(input){
    let length = Number(input[0]) // length e daljina
    let width = Number(input[1]) // width e shirochina
    let height = Number(input[2]) // height e visochina
    let procentOccupiedPlace = Number(input[3]) // occupied oznachava zaeto , place e mqsto
    let capacity = length * width * height
    let useLiter = (capacity / 1000)  * (1 - procentOccupiedPlace / 100)
    console.log(useLiter)


}
aquarium(["85",
"75",
"47",
"17"])
