console.log('Сейчас будет beep');
var colors = require('colors/safe');
var ansi = require('ansi');
var cursor = ansi(process.stdout);

var text = 'Мы сделали beep!';
function redBeep(text) {
    console.log(colors.bgCyan(text));
    cursor.beep();
}

redBeep(text);