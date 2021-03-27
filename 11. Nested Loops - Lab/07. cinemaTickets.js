function ticket(input){
    let i = 0
    let command = input[i]
    let nameFilm = ``
    let standartTicket = 0
    let kidTicket = 0
    let studentTicket = 0
    let freePlats = 0
    let ticketForOnefilm = 0
    let flag = false

    while(command != `Finish`){
        nameFilm = input[i]
        i++
        freePlats = Number(input[i])
        while(command != `End`){
            if(command == `standard`){
                standartTicket++
                ticketForOnefilm++

            }
            else if(command == `kid`){
                kidTicket++
                ticketForOnefilm++

            }
            else if(command == `student`){
                studentTicket++
                ticketForOnefilm++

            }
            if(ticketForOnefilm == freePlats){
                flag = true
                break;
            }
            i++
            command = input[i]
            if(command == `End`){
                flag= true
            }
            
        }
        if(flag){
            console.log(`${nameFilm} - ${((ticketForOnefilm / freePlats) * 100).toFixed(2)}% full.`)
            ticketForOnefilm = 0
            flag = false
        }
        i++
        command = input[i]

        
        

    }
    
    if(command == `Finish`){
        console.log(`Total tickets: ${(standartTicket + studentTicket + kidTicket)}`)
        console.log(`${((studentTicket / (standartTicket + studentTicket + kidTicket)) * 100).toFixed(2)}% student tickets.`)
        console.log(`${((standartTicket / (standartTicket + studentTicket + kidTicket)) * 100).toFixed(2)}% standard tickets.`)
        console.log(`${((kidTicket / (standartTicket + studentTicket + kidTicket)) * 100).toFixed(2)}% kids tickets.`)
    }



}
ticket(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
