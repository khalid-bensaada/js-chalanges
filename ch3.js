function countVowels(str) {

    if (typeof str !== "string") {
        return "Input is not a string";
    }


    str = str.toLowerCase();

    let count = 0;
    let vowels = "aeiou";


    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}
let userInput = prompt("Enter a string:");


let result = countVowels(userInput);


console.log("Nombre de voyelles : " + result);
