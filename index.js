const questions = [
    "O que aprendi hoje",
    "O que me deixou aporecido",
    "O que me deixou feliz",
    "Quantas pessoas ajudei hoje"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] +" > ") 
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim()) 
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit() 
    } 
})