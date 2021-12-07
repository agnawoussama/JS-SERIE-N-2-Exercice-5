//stockage des elements
const nomPren = document.getElementById("nom-pre");
const email   = document.getElementById("adrEml");
const listBox = document.getElementById("selectInfos");
//Instantiation d'un objet Set
const mySet = new Set();

//Fonction qui affiche tous les noms de mySet dans le select element
function afficherInfos(){
    listBox.innerHTML = ""
    mySet.forEach (function(item) {
        listBox.innerHTML += "<option>"+item[0]+"</option>" ;
      })
}

//Fonction qui vide les zones de texte
function viderTextBoxes(){
    nomPren.value = email.value = "";
}

//Fonction qui ajouter un tableau dans mySet et actualise les infos de select element
//en appelant la methode afficherInfos() et vide les zones de textes
function ajouterArray (){
    mySet.add([nomPren.value, email.value])
    afficherInfos()
    viderTextBoxes()
}

//Fonction qui supprime un tableau selecté
//dans un select element
function supprimerArray(){
    mySet.forEach (function(item) {
        if (item[0] == listBox.value) {
            mySet.delete(item);
        }
      })
    afficherInfos()
}

//Fonction qui affiche l'adresse de nom selecté dans un select element
function afficherAdr(){
      mySet.forEach (function(item) {
        if (item[0] == listBox.value) {
            alert(`L'adresse e-mail de ${item[0]} est: ${item[1]}`)
        }
      })
}