//Fonction qui calcule les nombres pairs
function countAllPairs(){
    var count = 0;
    //Tous les checkboxes 
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    //Içi on calcule tous les checkboxes qui contiennet des nombres pairs
    for (const checkbox of allCheckboxes) {  
        if (parseInt(checkbox.value) % 2 == 0) {
            count += parseInt(checkbox.value);  
        }            
    }  
    return count;
}

//Fonction qui verifie si tous les checkboxes selectionné sont pairs
function reponse(){
    //Tous les checkboxes selectionné
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    //Si l'utilisateur n'as choisi aucun valeur, on affiche un message et en retourne false
    if (checkedCheckboxes.length == 0) {
        alert("Veuillez choisir un/plusieurs choix");
        return false;
    //Sinon on calcule tous les checkboxes selectionné et a la fin on compare si tous 
    //ces checkboxes sont les mêmes que les checkboxes qui contiennet des nombres pairs
    }else{
        var res = 0;
        for (const checkbox of checkedCheckboxes) {      
            res += parseInt(checkbox.value);    
        }  
        alert((res == countAllPairs() ) ? "Bonne Reponse" : "Mauvaix Reponse")
    }   
}

