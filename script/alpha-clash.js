// function play(){
//     // hide the home screen.to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const  playgroundSection =document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }
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
    hideElementById('home-screen')
    showElementId('play-ground')
    continueGame()
}