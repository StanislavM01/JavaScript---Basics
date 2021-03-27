function tournament(input){
 let i = 0
 let command = input[i]
 i++
 let sumprime = 0
 let sumNoPrime = 0

 while(command != `stop`){
     let number = Number(command)
     if(number < 0){
        console.log(`Number is negative.`)
        command = input[i]
        i++
        continue;
     }
     if (number == 1){
         sumprime += number
         command = input[i]
         i++
         continue;
     }
     let isPrime= true
     for(let i = 2; i < number; i++){
         if(number % i == 0){
             isPrime = false
             break;

         }
     }
     if(isPrime){
         sumprime += number
     }else{
         sumNoPrime += number
     }



     command = input[i]
     i++
 }
 console.log(`Sum of all prime numbers is: ${sumprime}`)
 console.log(`Sum of all non prime numbers is: ${sumNoPrime}`)
}
tournament(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
