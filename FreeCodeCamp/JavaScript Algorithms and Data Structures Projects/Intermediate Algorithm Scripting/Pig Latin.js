//Method 1 with a for loop

function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let finalWord = "";
    let consonent = [];
    if (vowels.includes(str[0])) {
        finalWord = str + "way";
    } else {
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                break;
            }
            consonent.push(str[i]);
        }
        finalWord = str.slice(consonent.length) + consonent.join("") + "ay";
    }
    return finalWord;
}


//Method 2 with RegExp

const translatePigLatin = str => {
    let cluster = str.split(/[aeiou]/)[0];
    return cluster !== "" ? str.slice(cluster.length) + cluster + "ay" : str + "way";
}

translatePigLatin("consonant");