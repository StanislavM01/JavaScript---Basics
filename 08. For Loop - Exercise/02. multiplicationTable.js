function multiplicationTable(input) {
    let n = Number(input[0]);
    let sum

    for(i = 1; i <= 10; i++) {
        sum = i * n
        console.log(`${i} * ${n} = ${sum}`)
    }
}
multiplicationTable([`5`])