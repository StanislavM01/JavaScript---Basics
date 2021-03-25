function birthday(input){
let priceRentForHouse = Number(input[0])
let priceForCake = priceRentForHouse * (20 / 100)
let drinks = priceForCake * (55 / 100)
let animator = priceRentForHouse / 3
let priceForAll = priceRentForHouse + priceForCake + drinks + animator 

console.log(priceForAll)

}
birthday (['2250']);