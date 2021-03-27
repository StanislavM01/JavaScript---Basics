function sumnumbers(input){
let text = input[0]
let result = 0
let word = ``

for(let i = 0; i < text.length; ++i){
    word = Number(text[i])
    result = result + word 
    
}
console.log(`The sum of the digits is:${result}`)





}
sumnumbers(["564891"])