// CREATE VARIABLES AND BOXES ARRAY

let playertext = document.getElementById('playerText')
let restartBtn =document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winningIndicator = getComputedStyle

// CREATE USER 1 AND 2 SYMBOLS, DECALRE USER 1 SYMBOL AND FILL EACH BOX IN ARRAY WITH VALUE NULL

const O_SYMBOL = "O"
const X_SYMBOL = "X"
let currentUser = X_SYMBOL
let spaces = Array(9).fill(null)

// START GAME FUNCTIONS ADD EVENT LISTENERS TO ALL 9 BOXES. ARROW FUNCTION WITH CALLBACK FUNCTION BOXCLICKED

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// BOX CLICKED FUNCTION WILL TARGET THE BOX CLICKED BY THE USER 

function boxClicked(userSelection) {
    const id = userSelection.target.id

// IF SPACES IS EQUAL TO NULL WE CAN CONTINUE
// FILL THE SPACES AND CHANGE THE VALUE OF THE SYMBOLS AFTER EACH CLICK

    if(!spaces[id]){
        spaces[id] = currentUser
        userSelection.target.innerText = currentUser

// CREATE WINNING FUNCTION 

        if(winningUser()){
            winningMessage = `${currentUser} wins!`
            let winning_order = winningUser()

            winning_blocks = 
        }

        currentUser = currentUser == X_SYMBOL ? O_SYMBOL : X_SYMBOL
    }
}

// WINNING COMBINATIONS ARRAY
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//  USE ITERATOR TO CHECK FOR 3 SPACES IN A ROW ARE FILLED AND USER HAS WON
function winningUser() {
    for (const condition of winningCombos){
        let [a, b, c] = condition

        if(spaces[a] &&  (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
        return [a, b, c]
        }
    }
    return false
}

// ADD CLICK EVENT LISTENER TO RESTART BUTTON AND RUN RESTART FUNCTION. RESTART FUNCTION WILL FILL ARRAY WITH NULL. 

    restartBtn.addEventListener('click', restart)

function restart() {
        spaces.fill(null)

        boxes.forEach( box => {
            box.innerText = ''
     })
// RESET WINNING MESSAGE
        winningMessage = 'Tic Tac Toe'
// SET X SYMBOL AS DEFAULT
        currentUser =  X_SYMBOL

}


startGame()