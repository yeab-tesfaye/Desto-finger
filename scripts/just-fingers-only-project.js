const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 50;
const BUTTON_SIZE = 100; // Diameter of circular buttons
const SPACING = 20;
const PARTICLE_COUNT = 100;

// Game state
let gameState = {
    currentScreen: 'mainMenu',
    playerChoice: null,
    computerChoice: null,
    playerMove: null,
    computerMove: null,
    score: JSON.parse(localStorage.getItem('score')) || { Wins: 0, Losses: 0, Ties: 0 }
};

// Game constants
const CHOICES = ['Just', 'Finger', 'Can', 'Count', 'Only'];
const MOVES = ['Null', ...CHOICES];
const IMAGES = {};
const RULES = {
  Null: { 
    Null: 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
  },
  Just: {
    Null: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
  },
  Finger: {
    Null: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    },
  Can: {
    Null: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    },
  Count: {
    Null: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Count' ? 'You win!' : cChoice === 'Count' ? 'You lose!' : 'Tie',
    },
  Only: {
    Null: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    Just: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Finger: (pChoice, cChoice) => pChoice === 'Just' ? 'You win!' : cChoice === 'Just' ? 'You lose!' : 'Tie',
    Can: (pChoice, cChoice) => pChoice === 'Finger' ? 'You win!' : cChoice === 'Finger' ? 'You lose!' : 'Tie',
    Count: (pChoice, cChoice) => pChoice === 'Can' ? 'You win!' : cChoice === 'Can' ? 'You lose!' : 'Tie',
    Only: (pChoice, cChoice) => pChoice === 'Only' ? 'You win!' : cChoice === 'Only' ? 'You lose!' : 'Tie',
    },
};

// Load assets
async function loadAssets() {
    for (const move of MOVES) {
        const img = new Image();
        img.src = `emojis/${move}-emoji.png`;
        IMAGES[move] = img;
    }
}

// Canvas drawing functions
function drawButton(text, x, y, callback) {
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.roundRect(x, y, BUTTON_WIDTH, BUTTON_HEIGHT, 8);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, x + BUTTON_WIDTH/2, y + BUTTON_HEIGHT/2 + 6);
    
    return { x, y, width: BUTTON_WIDTH, height: BUTTON_HEIGHT, callback };
}

function drawText(text, x, y, fontSize = 20, color = '#333') {
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillText(text, x, y);
}

function drawImageCenter(img, x, y, size = 120) {
    if (img.complete) {
        ctx.drawImage(img, x - size/2, y - size/2, size, size);
    }
}
function drawImageButton(img, x, y, callback) {
    // Draw circular background
    ctx.beginPath();
    ctx.arc(x, y, BUTTON_SIZE/2, 0, Math.PI * 2);
    ctx.fillStyle = 'transparent';
    ctx.fill();
    
    // Draw image
    if (img.complete) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, BUTTON_SIZE/2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(
            img,
            x - BUTTON_SIZE/2,
            y - BUTTON_SIZE/2,
            BUTTON_SIZE,
            BUTTON_SIZE
        );
        ctx.restore();
    }
    
    return { 
        x, y, 
        radius: BUTTON_SIZE/2,
        callback 
    };
}

// Game rendering
function renderMainMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawText('Pick your Choice', canvas.width/2, 100, 30, '#333');
    
    const startX = (canvas.width - (CHOICES.length * BUTTON_WIDTH + (CHOICES.length-1)*SPACING)) / 2;
    gameState.buttons = [];
    
    CHOICES.forEach((choice, index) => {
        const btn = drawButton(
            choice,
            startX + index * (BUTTON_WIDTH + SPACING),
            250
        );
        btn.callback = () => initializeGame(choice);
        gameState.buttons.push(btn);
    });
    drawScore();
}

function renderGameInterface() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw choices
    drawText(`You chose: ${gameState.playerChoice}`, 200, 100, 24,'red');
    drawText(`Computer chose: ${gameState.computerChoice}`, 200, 145, 24, 'blue');
    drawText('Choose your move', 600, 200, 40, 'black');
    
  // Draw circular move buttons
  const startX = (canvas.width - (MOVES.length * (BUTTON_SIZE + SPACING))) / 2;
    gameState.buttons = [];
    
    MOVES.forEach((move, index) => {
        const btnX = startX + index * (BUTTON_SIZE + SPACING) + BUTTON_SIZE/2;
        const btnY = 300;
        
        const btn = drawImageButton(
            IMAGES[move],
            btnX,
            btnY
        );
        btn.callback = () => playRound(move);
        gameState.buttons.push(btn);
    });

    drawScore()
}

// Update input handling for circles
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gameState.buttons?.forEach(btn => {
        const distance = Math.sqrt((x - btn.x) ** 2 + (y - btn.y) ** 2);
        if (distance <= btn.radius) {
            btn.callback();
        }
    });
});
function renderResult() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw result text
    drawText(gameState.result, canvas.width/2, 100, 24, '#333');
    
    // Draw move images
    drawImageCenter(IMAGES[gameState.playerMove], canvas.width/2 - 100, 200);
    drawImageCenter(IMAGES[gameState.computerMove], canvas.width/2 + 100, 200);
    
    // Draw buttons
    const btnX = canvas.width/2 - BUTTON_WIDTH - 10;
    const replayBtn = drawButton(
        'Play Again',
        btnX,
        450
    );
    replayBtn.callback = () => {
        gameState.currentScreen = 'mainMenu';
        requestAnimationFrame(gameLoop);
    };

    const resetBtn = drawButton(
        'Reset Score',
        btnX + BUTTON_WIDTH + 20,
        450
    );
    resetBtn.callback = resetScore;
    
    gameState.buttons = [replayBtn, resetBtn];
    drawScore();
}
function drawScore() {
    drawText(`Wins: ${gameState.score.Wins}`, 100, 500, 20, 'green');
    drawText(`Losses: ${gameState.score.Losses}`, 200, 500, 20, 'red');
    drawText(`Ties: ${gameState.score.Ties}`, 300, 500, 20, 'blue');
}
// Input handling
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gameState.buttons?.forEach(btn => {
        if (x > btn.x && x < btn.x + btn.width &&
            y > btn.y && y < btn.y + btn.height) {
            btn.callback();
        }
    });
});

// Game logic (unchanged from original)
function getComputerChoice(playerChoice) {
  const choices = CHOICES.filter(c => c !== playerChoice);
  return choices[Math.floor(Math.random() * choices.length)];
}
function getRandomMove() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}
function determineResult(playerMove, computerMove, playerChoice, computerChoice) {
  const rule = RULES[playerMove][computerMove];
  return typeof rule === 'function' ? rule(playerChoice, computerChoice) : rule;
}
// Score 

function updateScore(result) {
    if (result === 'You win!') gameState.score.Wins++;
    else if (result === 'You lose!') gameState.score.Losses++;
    else if (result === 'Tie') gameState.score.Ties++;
    localStorage.setItem('score', JSON.stringify(gameState.score));
}


function resetScore() {
    gameState.score = { Wins: 0, Losses: 0, Ties: 0 };
    localStorage.setItem('score', JSON.stringify(gameState.score));
    requestAnimationFrame(gameLoop);
}

function updateScoreDisplay() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Arial";
  ctx.fillText(`Wins: ${score.Wins}`, 10, 30);
  ctx.fillText(`Losses: ${score.Losses}`, 10, 60);
  ctx.fillText(`Ties: ${score.Ties}`, 10, 90);
}
function initializeGame(choice) {
    gameState.playerChoice = choice;
    gameState.computerChoice = getComputerChoice(choice);
    gameState.currentScreen = 'gameInterface';
    requestAnimationFrame(gameLoop);
}

function playRound(move) {
    gameState.playerMove = move;
    gameState.computerMove = getRandomMove();
    gameState.result = determineResult(move, gameState.computerMove, 
        gameState.playerChoice, gameState.computerChoice);
    updateScore(gameState.result);
    gameState.currentScreen = 'result';
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    switch(gameState.currentScreen) {
        case 'mainMenu': renderMainMenu(); break;
        case 'gameInterface': renderGameInterface(); break;
        case 'result': renderResult(); break;
    }
}
window.addEventListener('load', () => {
    document.getElementById('loadingScreen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 500);
});

// Update score board
function updateScoreDisplay() {
    const score = gameState.score;
    document.getElementById('scoreBoard').textContent = 
        `Wins: ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`;
}
// Initialize game
loadAssets().then(() => {
    gameLoop();
    setInterval(() => requestAnimationFrame(gameLoop), 1000/60);
});

