
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


document.getElementById('resetScore').addEventListener('click', () => {
    humanScore.textContent = '0';
    machineScore.textContent = '0';

    humanScoreNumber = 0;
     machineScoreNumber = 0;
  });
    

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (HumanChoice) => {

    playTheGame(HumanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine){
         result.innerHTML = "Deu empate! &#x1F47D"

    } else if ( (human === 'paper' && machine === 'rock') ||
                (human === 'rock' && machine === 'scissors') ||
                (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
         result.innerHTML = "Você ganhou! &#x1F61C"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
         result.innerHTML = "Você perdeu para a Alexa! &#x1F62D"

    }
}
