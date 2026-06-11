const pays = [
{ cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
{ cca3: "MLI", nom: "Mali", capitale: "Bamako" },
{ cca3: "GHA", nom: "Ghana", capitale: "Accra" },
{ cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
{ cca3: "MAR", nom: "Maroc", capitale: "Rabat" }
];
function choisirAuHasard(tableau) {
const index = Math.floor(Math.random() * tableau.length);
return tableau[index];
}

const etudiants = [
{ nom: "Fatou", note: 12 },
{ nom: "Moussa", note: 8 },
{ nom: "Kabo", note: 15 },
{ nom: "Loumtou", note: 12 },
{ nom: "kilyan", note: 8 },
{ nom: "Awa", note: 15 },
{ nom: "Fatou", note: 12 },
{ nom: "Moussa", note: 8 },
{ nom: "Awa", note: 15 }
];
// Parcourir et afficher chaque étudiant
etudiants.forEach((e) => {
   let somme = 0;
    somme= somme + e.note

});
console.log(`la moyenne est ${somme / etudiants.length}`);
// Vue en tableau dans la console (très pratique pour vérifier)
// console.table(etudiants);

const prixFcfa = [656, 1312, 3280]; // des prix en FCFA
const prixEuro = prixFcfa.map((p) => p / 656);
console.log(prixEuro); 
console.log(prixFcfa); 


const capital = pays.map((e) => e.capitale); 