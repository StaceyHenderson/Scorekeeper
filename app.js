const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1Points = document.querySelector('#ply1')
const p2Points = document.querySelector('#ply2');
const resetBtn = document.querySelector('#reset');
const playTo = document.querySelector('#pointSelect');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let gameOn = true;


p1Btn.addEventListener('click', () => {
    
    if(gameOn && winningScore !== 0){   
        p1Score += 1;
        if(p1Score === winningScore){
            gameOn = false;
            p1Points.classList.add('winner');
            p2Points.classList.add('loser');
    }
    p1Points.textContent = p1Score;    
}});

p2Btn.addEventListener('click', () => {
    if(gameOn && winningScore !== 0){   
        p2Score += 1;
        if(p2Score === winningScore){
            gameOn = false;
            p2Points.classList.add('winner');
            p1Points.classList.add('loser');
    }
    p2Points.textContent = p2Score;    
}});

resetBtn.addEventListener('click', reset);

// Arrow function do not have their own bininding to this
playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

function reset() {
    gameOn = true;
    p1Score = 0;
    p2Score = 0;
    p1Points.textContent = p1Score;
    p2Points.textContent = p2Score; 
    p2Points.classList.remove('winner','loser');
    p1Points.classList.remove('winner','loser');
};















