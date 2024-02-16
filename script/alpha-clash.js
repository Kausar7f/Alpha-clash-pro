// function play(){
//     // hide the home screen.to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const  playgroundSection =document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }
// capture keyboard  key press
function handleKeyboardPress(event){
    const  playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop the game if pressed  'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get  the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
// check matched or not

if(playerPressed  === expectedAlphabet){
    console.log('you get a point');

    const currentScore = getTextElementValueById('current-score');
    const updateScore = currentScore + 1;
    setTextElementValueById('current-score', updateScore);
    // update score:
    // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const  currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // const currentScore= getTextElementById('current-score');
    // // 2.increase the score by 1
    const newScore = currentScore +1;
    // // 3.show the update  score
    // currentScoreElement.innerText = newScore;

    // // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{

    console.log('you missed.so ami tumar dulavai');

    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife - 1;

    setTextElementValueById('current-life',  updateLife);
    if(updateLife === 0){
        gameOver();
    }


    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);
    // const newLife = currentLife-1;
    // currentLifeElement.innerText = newLife;
}


}

document.addEventListener('keyup', handleKeyboardPress);


function continueGame(){
    // step-1: generate a random elphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);
    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
    
}









function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementId('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementId('final-score');
    // Final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore);
    // clear the last selecte alphabet highlight
    const currentAlphabet= getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}