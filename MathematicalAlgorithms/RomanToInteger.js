//Given a string S representing a roman numeral. Convert S into integer.

const string = 'XXV';

const symbols = [
    {
        number: 1 , symbol: 'I',
        number: 5 , symbol: 'V',
        number: 10 , symbol: 'X',
        number: 50 , symbol: 'L',
        number: 100 , symbol: 'C',
        number: 500 , symbol: 'D',
        number: 1000 , symbol: 'M',
    }
];

var symbol = symbols.map(function(number){
    console.log(number.number);
    return number.number;
});

console.log(symbol);
