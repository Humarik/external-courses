function Hangman(word){
    this.count = 6;
    this.word = word.toLowerCase().split('');
    this.userWord = new Array(word.length).fill('_');
    this.mistakes = [];
}

const hangman = new Hangman('webpurple');

Hangman.prototype.guess = function (letter){
    const isWord = this.word.some(item => item === letter);
    if(isWord){
        this.word.forEach((elem, index) => {
            if (elem === letter) this.userWord.splice(index, 1, letter);
        });
        let isWin = this.userWord.includes('_') ? this.userWord.join('') : this.userWord.join('') + ' | You won!';
        return isWin;
    }
    this.count--;
    this.mistakes.push(letter);
    return 'wrong letter, errors left ' + this.count + ' | ' + this.mistakes.join(',');
}

Hangman.prototype.getGuessedString = function (){
    return this.userWord.join('');
}

Hangman.prototype.getErrorsLeft = function (){
    return this.count;
}

Hangman.prototype.getWrongSymbols = function (){
    return this.mistakes;
}

Hangman.prototype.getStatus = function (){
    return this.userWord.join() + ' | ' + 'errors left' + this.count;
}
Hangman.prototype.startAgain = function (word) {
    this.count = 6;
    this.word = word.toLowerCase().split('');
    this.userWord = new Array(word.length).fill('_');
    this.mistakes = [];
}
module.exports = hangman;