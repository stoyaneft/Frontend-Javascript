"use strict"

var prompt = require('prompt');

  //
  // Start the prompt
  //
prompt.start();

function getDigits(number)
{
    var digits = [];
    while (number)
    {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    return digits;
}

function countCowsAndBulls(number, inputNumber)
{
    var digits = getDigits(number);
    var inputDigits = getDigits(inputNumber);
    var cows = 0, bulls = 0;
    for (var i = 0; i < digits.length; i++)
    {
        for (var j = 0; j < inputDigits.length; j++)
        {
            if (digits[i] == inputDigits[j])
            {
                if (i == j)
                    bulls++;
                else
                    cows++;
            }
        }
    }
    return {cows: cows, bulls: bulls};
}


function promptNumber(rightNumber)
{
    prompt.get(['number'], function (err, result){
        var res =countCowsAndBulls(rightNumber, result.number);
        console.log("You have ", res.cows, "cows and ", res.bulls, "bulls.");
        if (res.bulls == 4)
        {
            console.log("Congratulations, you win!");
        }
        else
        {
            promptNumber(rightNumber);
        }
    });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isUnique(number)
{
    var digits = getDigits(number);
    for (var i = 0; i < digits.length; i++)
        for (var j = i + 1; j < digits.length; j++)
        {
            if (digits[i] == digits[j])
                return false;
        }
    return true;
}

function generateUniqueNumber() {
    var number = getRandomInt(1000, 9999);
    while (!isUnique(number))
    {
        number = getRandomInt(1000, 9999);
    }
    return number;
}

var randomNumber = generateUniqueNumber();
console.log(randomNumber);
promptNumber(randomNumber);
