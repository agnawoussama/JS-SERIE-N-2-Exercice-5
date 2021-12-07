//element de zone de text verifie
const result = document.getElementById("txtbx-verif");

//Fonction qui verifie si la radio selectionné et affiche dans la zone de texte
//de verifie si la reponse et vrai ou faux
function verifier(){
    const radio = document.querySelector('input[name="radio-degree"]:checked').value
    result.value = (radio == 60) ?  "Reponse Vrai" :  "Reponse Fausse";
}