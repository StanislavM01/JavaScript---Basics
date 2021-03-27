function grades(input){
    let numbStudents = Number(input[0])
    let fiveAssessment = 0
    let fourAssessment = 0
    let threeAssessment = 0
    let lessAssessment = 0
    let procFive = 0
    let procFour = 0
    let procThree = 0
    let procLess = 0
    let Average = 0
    for(let i = 1; i <= numbStudents; i++){
        let studentAssessment = Number(input[i])
        Average += studentAssessment

        if(studentAssessment >= 5){
            fiveAssessment += 1
        }else if(studentAssessment >= 4 && studentAssessment <= 4.99){
            fourAssessment += 1
        }else if(studentAssessment >= 3 && studentAssessment <= 3.99){
            threeAssessment += 1
        }else{
            lessAssessment += 1
        }

    }
    procFive = (fiveAssessment / numbStudents) * 100
    procFour = (fourAssessment / numbStudents) * 100
    procThree = (threeAssessment / numbStudents) * 100
    procLess = (lessAssessment / numbStudents) * 100
    Average = Average / numbStudents

    console.log(`Top students: ${procFive.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${procFour.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${procThree.toFixed(2)}%`)
    console.log(`Fail: ${procLess.toFixed(2)}%`)
    console.log(`Average: ${Average.toFixed(2)}`)
    






}
grades([`10`,`3.00`,`2.99`,`5.68`,`3.01`,`4`,`4`,`6.00`,`4.50`,`2.44`,`5`])