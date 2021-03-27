function vegetableMarket(input){
let priceForKgVeg = Number(input[0]);
let priceForKgFruit = Number(input[1]);
let allKgOfVeg = Number(input[2]);
let allKgOfFruit = Number(input[3]);
let euroToBgn = 1.94;
let price = (priceForKgFruit * allKgOfFruit + priceForKgVeg * allKgOfVeg) / euroToBgn
console.log(price.toFixed(2));



}
vegetableMarket(['25','35','45','50']);