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

let board = [[0,0,0],
             [0,0,0],
             [0,0,0]];





function checkWin(){
    if(colMove == "x" || rowMove == "x"){
        winStatus = true;
    }

    return winStatus;
}


function play(){
    while(!winStatus){
        colMove = prompt("Choose a column");
        rowMove = prompt("Choose a row");
        console.log(colMove);
        console.log(rowMove);
        checkWin();
    }
}

play();