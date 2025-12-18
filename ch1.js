function isEven(nombre) {

    if (isNaN(nombre)) {
        console.log("Veuillez entrer un nombre valide.");
        return;
    }


    if (nombre % 2 === 0) {
        console.log(nombre + " est pair : true");
        return true;
    } else {
        console.log(nombre + " est impair : false");
        return false;
    }
}

let input = prompt("Entrez un nombre :");


let number = Number(input);
isEven(number);
