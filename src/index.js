const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letters = expr.split('*').filter(word => word ? word : undefined).map(word => {
        let oneWordLetters = [];

        for (let i = 0; i < word.length; i += 10) {
            oneWordLetters.push(word.slice(i, i + 10));
        }

        const onlyChars = oneWordLetters.map(letter => letter.slice(letter.indexOf('1')));
        let dotAndDashWord = [];

        onlyChars.forEach(letter => {
            let oneChar = [];

            for (let i = 0; i < letter.length; i += 2) {
                oneChar.push(letter.slice(i, i + 2));
            }

            dotAndDashWord.push(oneChar.map(code => code === '10' ? '.' : '-').join(''));
        });

        return dotAndDashWord.map(letter => MORSE_TABLE[letter]).join('');
    });

    return letters.join(' ');
}

module.exports = {
    decode
}