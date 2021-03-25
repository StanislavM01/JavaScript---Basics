function zoomagazin(input){

    let numberdogs = input[0]
    let numberofthelastanimals = input[1]
    let moneyfordogs = numberdogs * 2.5
    let moneyfromotheranimals = numberofthelastanimals * 4
    let needmoney = moneyfordogs + moneyfromotheranimals
    console.log(`${needmoney} lv`)

}
zoomagazin(['4','5'])