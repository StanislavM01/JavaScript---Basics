function password(input){
    let name = input[0]
    let password = input[1]
    let i = 3
    let data = input[i]
    while (data != password){
        i++
        data = input[i]
       
    }
    console.log(`Welcome ${name}!`)





}
password(["Nakov","1234","Pass","1324","1234"])
