'use strict'

import fs from 'fs';
import os from 'os';
import { scoreWord } from "./scrabble"

function getStatistics(filename: string): {[key: string]: number;} {
    let fileContent: string = "";
    try {
        fileContent = fs.readFileSync(filename, { encoding: "utf8", flag: "r" });
    } catch {
        console.log("Cannot read file");
        
    }

    //console.log("fileContent:" + fileContent);

    let lines: string[] = fileContent.split(os.EOL)
    //console.log("lines: " + lines);

    let player1sumOfScores: number =0;
    let player2sumOfScores: number =0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const words: string[] = line.split(" ");

        const scoreOfPlayer1Word: number = scoreWord(words[0]);
        const scoreOfPlayer2Word: number = scoreWord(words[1]);

        player1sumOfScores += scoreOfPlayer1Word;
        player2sumOfScores += scoreOfPlayer2Word;
    }

    const rounds: number = lines.length;

    let winner: number = 0;
    if (player1sumOfScores > player2sumOfScores){
        winner = 1;
    } else if (player2sumOfScores > player1sumOfScores){
        winner = 2;
    }

    return {
        rounds: rounds,
        player1Points: player1sumOfScores,
        player2Points: player2sumOfScores,
        winner: winner
    }
}

console.log(getStatistics("game.txt"))