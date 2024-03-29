document.addEventListener('DOMContentLoaded', function () {
    // add processes here
});

// create 8 stacks of cards

// move to wallet

const cardStacks = document.querySelectorAll('.card-stack');
// const wallet = document.querySelector('.wallet');
const mediterranean = document.querySelector('.mediterranean');
const baltic = document.querySelector('.baltic');
const reading = document.querySelector('.reading');
const oriental = document.querySelector('.oriental');
const vermont = document.querySelector('.vermont');
const connecticut = document.querySelector('.connecticut');
const stCharles = document.querySelector('.st-charles');
const states = document.querySelector('.states');
const virginia = document.querySelector('.virginia');
const stJames = document.querySelector('.st-james');
const tennessee = document.querySelector('.tennessee');
const newYork = document.querySelector('.new-york');
const kentucky = document.querySelector('.kentucky');
const indiana = document.querySelector('.indiana');
const illinois = document.querySelector('.illinois');
const atlantic = document.querySelector('.atlantic');
const ventnor = document.querySelector('.ventnor');
const marvin = document.querySelector('.marvin');
const pacific = document.querySelector('.pacific');
const northCarolina = document.querySelector('.north-carolina');
const pennsylvania = document.querySelector('.pennsylvania');
const parkPlace = document.querySelector('.park-place');
const boardwalk = document.querySelector('.boardwalk');
// const railroads = document.querySelector('.railroads');
// const utilities = document.querySelector('.utilities');

// add event listeners to each stack
export function moveToWallet(event) {
    // delete card from stack
    const card = this; // Assuming 'this' refers to the card element being clicked
    const stack = card.parentElement;
    stack.removeChild(card);
    
    // move card to wallet 
    const wallet = document.querySelector('.wallet'); // Assuming the wallet has the class 'wallet'
    wallet.appendChild(card);
    
    // add click event listener to the card in the wallet
    // card.addEventListener('click', moveBackToStack);
    
    console.log("I'm moving");

    // // Create a food div
    // const foodDiv = document.createElement('div');
    // foodDiv.className = 'food';
    // // foodDiv.textContent = randomFood;

    // // Position the food div where the user clicked
    // foodDiv.style.left = `${event.clientX}px`;
    // foodDiv.style.top = `${event.clientY}px`;

    // // Append the food div to the container
    // foodContainer.appendChild(foodDiv);
}

// function moveBackToStack() {
//     // delete card from wallet
//     const card = this; // Assuming 'this' refers to the card element being clicked
//     const wallet = card.parentElement;
//     wallet.removeChild(card);
    
//     // move card back to the original stack
//     const stack = document.querySelector('.cardStack'); // Assuming the original stack has the class 'card-stack'
//     stack.appendChild(card);
    
//     // add click event listener to the card in the stack
//     card.addEventListener('click', moveToWallet);
    
//     console.log("I'm moving back");
// }

const brownCards = document.querySelectorAll('#brown .card');

brownCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

const lightBlueCards = document.querySelectorAll('#lightBlue .card');

lightBlueCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
}
);

const pinkCards = document.querySelectorAll('#pink .card');

pinkCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
}
);

const orangeCards = document.querySelectorAll('#orange .card');

orangeCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
}
);

const redCards = document.querySelectorAll('#red .card');

redCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

const yellowCards = document.querySelectorAll('#yellow .card');

yellowCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
}
);

const greenCards = document.querySelectorAll('#green .card');

greenCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

const blueCards = document.querySelectorAll('#darkBlue .card');

blueCards.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

const railroads = document.querySelectorAll('#railroad .card');

railroads.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

const utilities = document.querySelectorAll('#utility .card');

utilities.forEach(card => {
    card.addEventListener('click', moveToWallet);
});

// CALCULATOR
const computationInput = document.getElementById('computation');
const outputSpan = document.getElementById('output');
const clearButton = document.getElementById('clearzy');
const equalsButton = document.getElementById('displayequals');

// Add event listener to equals button
equalsButton.addEventListener('click', performComputation);

// Function to perform computation
function performComputation(event) {
    event.preventDefault();
    
    const computation = computationInput.value;
    console.log(computation);
    var result = eval(computation);
    
    // Perform computation logic here
    
    // Update output
    outputSpan.textContent = result;
}

// Add event listener to clear button
clearButton.addEventListener('click', clearComputation);

// Function to clear computation
function clearComputation(event) {
    event.preventDefault();
    
    computationInput.value = '';
    outputSpan.textContent = '';
}

