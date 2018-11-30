//////////////////// Grille 7 x 7

var grille = new Array(7);

for (var i = 0; i < 7; i++)
{
 grille[i] = new Array(7);
}
// rempli le tableau de "vide"
for (var i=0; i<7; i++){
   for(var j=0; j<7; j++){
      grille[i][j] = "vide";
    }  
}   

////////////////////////////////////////////////


// var col1 = document.getElementById("col1");
// var col2 = document.getElementById("col2");
// var col3 = document.getElementById("col3");
// var col4 = document.getElementById("col4");
// var col5 = document.getElementById("col5");
// var col6 = document.getElementById("col6");
// var col7 = document.getElementById("col7");
var win = false;
afficherJoueurActif();

document.getElementById("grille").addEventListener("click", function(event){
    var clickedCellElmt;
    var clickedCellName;
    var clickedCellCoordX;
    var clickedCellCoordY;
    

    clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string(chaine de caractère)
    // clickedCellCoordX = parseInt(clickedCellName[0]); // récupère le 2eme caractère dans l'ID
    clickedCellCoordY = parseInt(clickedCellName[5]); // récupère le 2eme caractère dans l'ID
    console.log(" Y : " + clickedCellCoordY);
    console.log("clickedCell : " + clickedCellName);

    console.log(grille);
    console.log(clickedCellElmt);
    
    pion();
    color();
    // fonctions pour savoir si gagant
    victoireLigne();
    victoireColonne();
    victoireDiag1();
    victoireDiag2();
    afficherJoueurActif();
    changementJoueur(); 

    function pion() {
        if (grille[6][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 6;
        } else if (grille[5][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 5;
        } else if (grille[4][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 4;
        } else if (grille[3][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 3;
        } else if (grille[2][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 2;
        } else if (grille[1][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 1;
        } else if (grille[0][clickedCellCoordY] == "vide" ) {
            clickedCellCoordX = 0;
        }
    }


// Conditions de victoire

// verfif ligne

    function victoireLigne() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
        if (joueurActif == 1) {
            
            while (grille[ligne][colonne] == "jaune") {
                colonne ++;
            } 
            while (grille[ligne][colonne-1] == "jaune") {
                colonne --;
                compteur ++;
            }
            if (compteur >= 4) {
                gagner();
            } 

        } else if (joueurActif == 2) {
               
            while (grille[ligne][colonne] == "rouge") {
                colonne ++;
            } 
            while (grille[ligne][colonne-1] == "rouge") {
                colonne --;
                compteur ++;
            }
            if (compteur >= 4) {
                gagner();
            }
            }
    }

// verif colonne

    function victoireColonne() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;

        if (joueurActif == 1) {

            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6) {
                    ligne ++
                }else { 
                    ligne ++;
                    break;
                } 
            }
            while (grille[ligne-1][colonne] == "jaune") {
                if (ligne-1 != 0) {
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
            if (compteur >= 4) {
                gagner();
                }

        } else if (joueurActif == 2) {

            while (grille[ligne][colonne] == "rouge") {
                if (ligne != 6) {
                    ligne ++
                }else { 
                    ligne ++;
                    break;
                }  
            } 
            while (grille[ligne-1][colonne] == "rouge") {
                if (ligne-1 != 0) {
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
            if (compteur >= 4) {
                gagner();
            }
        }
    }

//  verif diagonale check haut gauche et verif bas droite

    function victoireDiag1() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
        if (joueurActif == 1) {
             
            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6 && colonne != 6) {
                    colonne ++;
                    ligne ++;
                } else {
                    colonne ++;
                    ligne ++;
                    break;
                }
            }            
            while (grille[ligne-1][colonne-1] == "jaune") {
                if (ligne-1 != 0 && colonne-1 != 0) {
                    colonne --;
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
             if (compteur >= 4) {
                gagner()
             }

        } else if (joueurActif == 2) {

            while (grille[ligne][colonne] == "rouge") {
                if (ligne != 6 && colonne != 6) {
                    colonne ++;
                    ligne ++;
                }else {
                    colonne ++;
                    ligne ++;
                    break;
                }
            } 
            while (grille[ligne-1][colonne-1] == "rouge") {
                if (ligne-1 != 0 && colonne-1 != 0) {
                    colonne --;
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
            if (compteur >= 4) {
                gagner();
            }
            }
    }

// verifie diagonale check en bas a gauche et verif en haut a droite

    function victoireDiag2() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
         if (joueurActif == 1) {

            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6 && colonne != 0) {                
                    colonne --;
                    ligne ++;
                } else {
                    colonne --;
                    ligne ++;    
                    break;
                }
            }
            while (grille[ligne-1][colonne+1] == "jaune") {
                if (ligne-1 != 0 && colonne+1 != 6) {  
                    colonne ++;
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
            if (compteur >= 4) {
                gagner();
            }
        } else if (joueurActif == 2) {
            
            while (grille[ligne][colonne] == "rouge") {
                if (ligne != 6 && colonne != 0) {                
                    colonne --;
                    ligne ++;
                } else {
                    colonne --;
                    ligne ++;    
                    break;
                }
            }
            while (grille[ligne-1][colonne+1] == "rouge") {
                if (ligne-1 != 0 && colonne+1 != 6) {  
                    colonne ++;
                    ligne --;
                    compteur ++;
                } else {
                    compteur ++;
                    break;
                }
            }
            if (compteur >= 4) {
                gagner();
            }
        } 
    }

//  fonction appliquer valeur joueur

    function color(){
        if (joueurActif == 1) {
            document.getElementById("cell"+ clickedCellCoordX + clickedCellCoordY).style.backgroundColor = "yellow";
            grille[clickedCellCoordX][clickedCellCoordY] = "jaune";
            console.log(grille[clickedCellCoordX][clickedCellCoordY]);
        } else if (joueurActif == 2) {
            document.getElementById("cell"+ clickedCellCoordX + clickedCellCoordY).style.backgroundColor = "red";
            grille[clickedCellCoordX][clickedCellCoordY] = "rouge";
            console.log(grille[clickedCellCoordX][clickedCellCoordY]);
        }
    }



    

});


// fonction affichage joueur

function afficherJoueurActif() {
    if (win == false) {
        if (joueurActif == 1) {
            document.getElementById("joueurActif").innerHTML = ("AU JOUEUR ROUGE");
            document.getElementById("joueurActif").style.color = "red";
        } else if (joueurActif == 2) {
            document.getElementById("joueurActif").innerHTML = ("AU JOUEUR JAUNE");
            document.getElementById("joueurActif").style.color = "yellow";
        } else{
            document.getElementById("joueurActif").innerHTML = ("AU JOUEUR JAUNE");
            document.getElementById("joueurActif").style.color = "yellow";
        }
    }
}


// fonction affichage vainqueur + raz

    

function gagner() {
    if (joueurActif == 1) {
        document.getElementById("joueurActif").innerHTML = ("JOUEUR JAUNE GAGNE !");
        document.getElementById("joueurActif").style.color = "yellow";
        // comptage();
        for (var i=0; i<7; i++) {
            for(var j=0; j<7; j++) {
                grille[i][j] = "plein";
            }
        win = true;
        }
    } else if (joueurActif == 2) {
            document.getElementById("joueurActif").innerHTML = ("JOUEUR ROUGE GAGNE !");
            document.getElementById("joueurActif").style.color = "red";
            // comptage();
            for (var i=0; i<7; i++) {
                for(var j=0; j<7; j++) {
                    grille[i][j] = "plein";
                }
            win = true;
            }
    }
}

    // fonction pour changement de joueur 

var joueur = true;
var joueurActif = 0;

changementJoueur();        
function changementJoueur() {
    if (joueur == true) {
        joueurActif = 1;
        joueur = false;
    } else {
        joueurActif = 2;
        joueur = true;
    }
}

// // fonction comptage

// var joueurJaune = 0;
// var joueurRouge = 0;

// function comptage() {
//     if (joueurActif == 1) {
//         joueurJaune ++;
//         document.getElementById("joueurJaune").innerHTML = (""+joueurJaune+"");
        
//     } else if (joueurActif == 2) {
//         joueurJaune ++;
//         document.getElementById("joueurJaune").innerHTML = (""+joueurRouge+"");
//     }
// }

// bouton reset

document.getElementById("nouvellePartie").addEventListener("click",reset);

// fonction reset

function reset() {
    for (var i=0; i<7; i++){
        for(var j=0; j<7; j++){
            grille[i][j] = "vide";
            document.getElementById("cell" + i + j).style.backgroundColor="rgba(255, 255, 255, 0.5)";
        }    
    }
    if (joueurActif ==1) {
        document.getElementById("joueurActif").innerHTML = ("AU JOUEUR JAUNE");
        document.getElementById("joueurActif").style.color = "yellow";
    } else if (joueurActif == 2) {
        document.getElementById("joueurActif").innerHTML = ("AU JOUEUR ROUGE");
        document.getElementById("joueurActif").style.color = "red";
    }
    win = false;
}