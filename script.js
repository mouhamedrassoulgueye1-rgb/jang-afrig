console.log("script.js est bien branché !");
const prenom = "Mouhamed";
console.log("Bonjour " + prenom);
console.log(`Bonjour ${prenom}, prêt(e) à coder ?`);

const pseudo = "Aminata"; // texte (string)
let score = 0; // nombre (number), va changer -> let
const partieFinie = false; // booléen (boolean)
console.log(`Joueur : ${pseudo}`);
console.log(`Score de départ : ${score}`);
score = score + 5; // on réécrit l'ardoise
console.log(`Nouveau score : ${score}`); // 5

const pays = ["Sénégal", "Mali", "Ghana", "Kenya"];
for (const nom of pays) {
    console.log(`Pays africain : ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);


// FCAF conversion
function fcfaconversion(montant) {
    return montant / 650;
}


// function qui calcule la somme 
function moyenne(notes) {
    let somme = 0;
    for (const note of notes) {
        somme = note + somme;
    }
    return somme / notes.length;
}

// function majorite 
function estTuMajeur(age) {
    return age >= 18 ? "majeur" : "mineur";
}
console.log(estTuMajeur(99));

function fizzBuzzSn() {
    for (let n = 0; n <= 30; n++) {
        if (n % 15 === 0) {
            console.log("Thieboudienne")
        } else if (n % 5 === 0) {
            console.log("boud")
        }
        else if (n % 3 === 0) {
            console.log("Thie")
        }
        else{
            console.log(n)
        }

    }
}

function estPali(nom) {
    let reverse=""
    for (const lettre of nom) {
        reverse = lettre + reverse;
    }

    return nom=== reverse;
}