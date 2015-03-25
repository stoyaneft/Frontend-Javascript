"use strict"

var prompt = require('prompt');

prompt.start();

var words = ['creation', 'imagination'];
var TRIES = 8;

function randomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function inWord(letter, word) {
    for (var i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            return true;
        }
    }
    return false;
}

function printProgress(word, guessedLetters, wrongLetters) {
    var isGuessed = true;
    console.log('Tries left: ', TRIES);
    console.log('Guesses: ', wrongLetters, '\n');
    var wordProgress = '';
    for (var i = 0; i < word.length; i++)
    {
        if (inWord(word[i], guessedLetters)) {
            wordProgress += word[i];
            wordProgress += ' ';
        } else {
            wordProgress += '_ ';
            isGuessed = false;
        }
    }
    console.log(wordProgress);
    return isGuessed;
}

function promptLetter(correctWord) {
    var isGuessed = printProgress(correctWord, guessedLetters, wrongLetters);
    if (isGuessed) {
        console.log('Congratulations, you win!');
        return;
    }
    prompt.get(['letter'], function (err, result){
        var letter = result.letter;
        if (inWord(letter, correctWord)) {
            guessedLetters.push(letter);
        } else {
            TRIES -= 1;
            wrongLetters.push(letter);
        }
        if (TRIES > 0) {
            promptLetter(correctWord);
        } else {
            console.log('You have been hanged :(');
        }
    });
}

var word = randomWord(words);
var guessedLetters = [word[0], word[word.length - 1]];
var wrongLetters = [];
promptLetter(word);
