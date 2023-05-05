// const fetch = require("node-fetch");

const prompt = require('prompt-sync')();

// async function fetchJoke() { 
//     const results = await fetch(`https://api.chucknorris.io/jokes/random`);
//     const data = await results.json();
//         console.log(data.value);
// } 
// fetchJoke();


winStatus = false;
colMove = "";
rowMove = "";
turn = 1

const winCons = [
   [1,1,1],
   [2,2,2],
];

console.log(winCons.xsWin);

let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];



function checkBoard(){
    if((colMove - 1) != -1){
        if(board[Number(rowMove) - 1][Number(colMove)] == board[Number(rowMove)][Number(colMove)]){
            if(board[Number(rowMove) + 1][Number(colMove)] ){
                if(board[Number(rowMove+1)][Number(colMove)] == board[Number(rowMove)][Number(colMove)]){
                    console.log("vertical win");
                }
            }
        }
    }

}

function checkWin(){
    if(colMove == "x" || rowMove == "x"){
        winStatus = true;
    }else{
        if(board[Number(rowMove)][Number(colMove)] == 0){
            board[Number(rowMove)][Number(colMove)] = turn
            if(turn == 1){
                turn = 2
            }else{
                turn = 1;
            }
        }else{
            console.log("This spot is already taken please choose again");
            colMove = prompt("Choose a new column");
            rowMove = prompt("Choose a new row");
            checkWin();
        }

    }

    return winStatus;
}


function play(){
    while(!winStatus){
        colMove = prompt("Choose a column ( Or enter x to exit program )");
        if(colMove == "x"){
            break;
        }
        rowMove = prompt("Choose a row ( Or enter x to exit program )");
        if(rowMove == "x"){
            break;
        }

        // console.log(colMove);
        // console.log(rowMove);
        checkWin();

        checkBoard();
        console.log(board)
    }
}

play();