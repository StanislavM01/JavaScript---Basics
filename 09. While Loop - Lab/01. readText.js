function readWord(input){

let a = 0 
let index = input[a]

while(index !== `Stop`){
    console.log(index)
    a += 1
    index = input[a]
}

}
readWord(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
