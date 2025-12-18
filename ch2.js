function reverseString(str) {

    if (typeof str !== 'string') {
        console.log("Erreur : veuillez entrer une chaîne de caractères.");
        return;
    }


    const reversed = str.split('').reverse().join('');

    console.log('Chaîne inversée : "' + reversed + '"');
    return reversed;
}