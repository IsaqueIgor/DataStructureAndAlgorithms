const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');

const Palindrome_Check = (word) => {
    const cleanStr = clean(word);
    for(let i=0; i < cleanStr.length / 2 ; i++){
        if(cleanStr[i] != cleanStr[cleanStr.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(Palindrome_Check('ana a ana'));