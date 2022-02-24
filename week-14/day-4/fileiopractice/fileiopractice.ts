/*
2. feladat:
Write a method which can read and parse a file containing information about songs. 
The method should receive one string parameter: the name of the file. 
The method should handle possible exceptions by printing messages to the standard output. 
It should return with the year which produced the most songs.*/

import fs from 'fs';
import os from 'os';

export function findWorstSongsYear(fileName: string): string {
    let fileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        console.error("Cannot read file");
    }

    let releaseDates: string[] = [];
    fileContent.forEach(row => {
        let cellsToRow: string[] = row.split(";");
        releaseDates.push(cellsToRow[3])
    });
    
    let numberOfyears: { [key: string]: number} = {};
    releaseDates.forEach(year => {
        if (numberOfyears.hasOwnProperty(year)) {
            numberOfyears[year] += 1;
        } else {
            numberOfyears[year] = 1;
        }
    });

    const sorted = Object.entries(numberOfyears).sort(([, a], [, b]) => b - a);

    return sorted[0][0];
}
console.log(findWorstSongsYear("100worst.csv"))