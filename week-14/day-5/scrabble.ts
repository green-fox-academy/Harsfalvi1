"use strict";

const wordScores: { [key: string]: number } = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};
// én megoldásom: 
export function scoreWord(word: string): number {
  let chars: string[] = word.split("");
  //console.log(chars)
  let sum = 0;
  let scoreOfWord = 0;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const charValue = wordScores[char];
    sum += charValue;
    if (chars.length > 0 && chars.length < 7) {
      scoreOfWord = sum * chars.length;
    } else if (chars.length === 7) {
      scoreOfWord = sum * 7 + 50;
    } else {
      scoreOfWord = 0;
    }
  }

  return scoreOfWord;
}
console.log(scoreWord("great")); //30
console.log(scoreWord("jukebox")); //239

//közös:
function getScoreOfOneWord(word: string): number {
  const letters = word.split("");
  let scoreOfWord = 0;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const letterScore = wordScores[letter];
    scoreOfWord += letterScore;
  }

  scoreOfWord *= letters.length;

  if (letters.length === 7) {
    scoreOfWord += 50;
  }

  return scoreOfWord;
}


function collectAllPalyedWordAndScore(wordList: string[]): {[key: string]: number;} {
    let allPalyedWordAndScore: {[key: string]: number;} = {};
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        allPalyedWordAndScore[word] = (scoreWord(word));   
    }
  return allPalyedWordAndScore;
}

console.log(collectAllPalyedWordAndScore(["great", "jukebox", "exam", "mug", "acélmuki"]));