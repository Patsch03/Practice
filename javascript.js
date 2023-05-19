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
turns = "X"

/*

X's = 1
O's = 2

*/

const winCons = [
   [1,1,1],
   [2,2,2],
];

console.log(winCons.xsWin);

let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];



function checkBoard(){

    /*
    KNOCKDOWN REPETITIVENESS
    ADD ENDGAME 
    ADD TIE MECHANIC INTO GAME 
    */
    if(colMove == "0"){
        if(rowMove == "0"){
            if(board[0][1] == board[0][0] && board[0][1] != 0){
                if(board[0][2] == board[0][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            } 

            if(board[0][0] == board[1][1] && board[0][0] != 0){
                if(board[1][1] == board[2][2]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        }else if(rowMove == "1"){
            if(board[1][1] == board[1][0] && board[1][1] != 0){
                if(board[1][2] == board[1][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        }else if(rowMove == "2"){
            if(board[2][1] == board[2][0] && board[2][0] != 0){
                if(board[2][2] == board[2][1]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
            if(board[1][1] == board[2][0] && board[2][0] != 0){
                if(board[0][2] == board[2][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        } 

        if(board[0][0] == board[1][0] && board[1][0] == board[2][0]){
            console.log(turns + "'s win");
            winStatus = true;
        }

    }else if(colMove == 1){
        if(rowMove == "0"){
            if(board[0][0] == board[0][1] && board[0][1] != 0){
                if(board[0][2] == board[0][1]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        }else if(rowMove == "1"){
            if(board[0][0] == board[1][1] && board[0][0] != 0){
                if(board[1][1] == board[2][2]){
                    console.log(turns + "'s win")
                    winStatus = true;
                }
            }
            if(board[1][1] == board[2][0] && board[2][0] != 0){
                if(board[0][2] == board[2][0]){
                    console.log(turns+ "'s win");
                    winStatus = true;
                }
            }
            if(board[1][0] == board[1][1] && board[1][0] != 0){
                if(board[1][2] == board[1][1]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        }

        if(board[0][1] == board[1][1] && board[1][1] == board[2][1]){
            console.log(turns + "'s win");
            winStatus = true;
        }
    }else if(colMove == 2){
        if(rowMove == "0"){
            if(board[0][1] == board[0][0] && board[0][1] != 0){
                if(board[0][2] == board[0][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            } 
            if(board[1][1] == board[2][0] && board[2][0] != 0){
                if(board[0][2] == board[2][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }

        }else if(rowMove == "1"){
            if(board[1][1] == board[1][0] && board[1][1] != 0){s
                if(board[1][2] == board[1][0]){
                    console.log(turns + "'s win");
                    winStatus = true;
                }
            }
        }else if(rowMove == "2"){
            if(board[2][1] == board[2][0] && board[2][0] != 0){
                if(board[2][2] == board[2][1]){
                    console.log(turns + "'s win")
                    winStatus = true;
                }
            }

            if(board[0][0] == board[1][1] && board[0][0] != 0){
                if(board[1][1] == board[2][2]){
                    console.log(turns + "'s win")
                    winStatus = true;
                }
            }

        } 
        if(board[0][2] == board[1][2] && board[1][2] == board[2][2]){
            console.log(turns + "'s win");
            winStatus = true;
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
                turns = "X"
            }else{
                turn = 1;
                turns = "O"
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

        checkWin();
        checkBoard();
        console.log(board)
    }
}

play();