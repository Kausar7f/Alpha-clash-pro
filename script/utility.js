function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;


}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const Text = element.innerText;
    return Text;
}







function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;

}