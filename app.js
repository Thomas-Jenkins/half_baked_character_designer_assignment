// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headChange = 0;
let middleChange = 0;
let bottomChange = 0;
let catchphraseArr = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headValue = headDropdown.value;
    // increment the head change count state
    headChange++;
    console.log('head', headChange);
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${headValue}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
    displayCatchphrases();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const middleValue = middleDropdown.value;
    // increment the middle change count state
    middleChange++;
    console.log('middle', middleChange);
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${middleValue}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
    displayCatchphrases();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const bottomValue = bottomDropdown.value;
    // increment the bottom change count state
    bottomChange++;
    console.log('bottom', bottomChange);
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${bottomValue}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
    displayCatchphrases();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const userInput = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArr.push(userInput);
    // console.log(catchphraseArr);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You've changed the head ${headChange} times, the middle ${middleChange} times and the bottom ${bottomChange} times. And who can forget your signature catchphrases:`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = ''; 
    // loop through each catchphrase in state
    for (let catchPhrase of catchphraseArr) {
        const catchPhraseEl = document.createElement('p');

        catchPhraseEl.textContent = catchPhrase;
        catchPhraseEl.classList.add('catchphrase');
        catchphrasesEl.append(catchPhraseEl);
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
