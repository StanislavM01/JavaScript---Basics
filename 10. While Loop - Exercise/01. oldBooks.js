function oldBook(input){
    let needBook = input[0]
    let i = 1
    numbbooks = input[i]
    let checked = 0

    while(numbbooks != `No More Books`){
        if(numbbooks == needBook){
            console.log(`You checked ${checked} books and found it.`)
            break;
        }
        i++
        numbbooks = input[i]
        checked++

    }
    if(numbbooks == `No More Books`){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${checked} books.`)
    }
    





}
oldBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


