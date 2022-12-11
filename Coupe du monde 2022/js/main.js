/*Volet 1*/

//Afficher une page défilante contenant des publicités 

let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".diapo");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;

    // On récupère les flèches
    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // On automatise le défilement
    timer = setInterval(slideNext, speed);

    // On gère l'arrêt et la reprise
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
}

// Cette fonction fait défiler le diaporama vers la droite
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

// Cette fonction fait défiler le diaporama vers la gauche
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

}

function stopTimer(){
    clearInterval(timer);
}
function startTimer(){
    timer = setInterval(slideNext, speed);
}


/*Volet 2*/

//Afficher le groupe sélectionné dans le sous-menu de l'élément de navigation Groupes
function f21(grp){
    let A = document.getElementById("grpA");
    let B = document.getElementById("grpB");
    let C = document.getElementById("grpC");
    let D = document.getElementById("grpD");
    let E = document.getElementById("grpE");
    let F = document.getElementById("grpF");
    let G = document.getElementById("grpG");
    let H = document.getElementById("grpH");
    switch (grp.value) {
        case 1:
            A.style.display = "block";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 2:
            A.style.display = "none";
            B.style.display = "block";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 3:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "block";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 4:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "block";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 5:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "block";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 6:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "block";
            G.style.display = "none";
            H.style.display = "none";
            break;
        case 7:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "block";
            H.style.display = "none";
            break;
        case 8:
            A.style.display = "none";
            B.style.display = "none";
            C.style.display = "none";
            D.style.display = "none";
            E.style.display = "none";
            F.style.display = "none";
            G.style.display = "none";
            H.style.display = "block";
            break;
        default:
            break;
    }
}

//Ajouter une équipe
function f22(a){
    let element = a.parentNode.parentNode;
    let equipe = document.createElement("tr");
    equipe.innerHTML=`<td><img src="flag.png" width="32px"></td>
                    <td><button class="team-btn"> Equipe ajouté (EAJ)</button></td>
                    <td><button class="minus-btn" onclick="f24(this)"><i class='fa fa-minus'></i></button></td>`;
    element.children[2].appendChild(equipe);
}

//Modifier le groupe
function f23(b){
    b.parentNode.parentNode.contentEditable = true;
    b.addEventListener("dblclick", () => {
        b.parentNode.parentNode.contentEditable = false;
    });
}

//Supprimer le groupe
function f24(c){
    c.parentNode.parentNode.remove();
}

/*Volet 3*/

//Afficher l'equipe cliqué dans le volet 2
function f31(team){
    let A = document.getElementById("team1");
    let B = document.getElementById("team2");
    let C = document.getElementById("team3");
    let D = document.getElementById("team4");
    let X = document.getElementById("joueurs-maroc");
    let ps1 = document.getElementById("ps1");
    let ps2 = document.getElementById("ps2");
    if (team.value === "1") {
        A.style.display = "block";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        X.style.display = "none";
        ps1.style.display = "none";
        ps2.style.display = "none";
    }
    if (team.value === "2") {
        B.style.display = "block";
        A.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        X.style.display = "none";
        ps1.style.display = "none";
        ps2.style.display = "none";
    }
    if (team.value === "3") {
        C.style.display = "block";
        A.style.display = "none";
        B.style.display = "none";
        D.style.display = "none";
        X.style.display = "none";
        ps1.style.display = "none";
        ps2.style.display = "none";
    }
    if (team.value === "4") {
        D.style.display = "block";
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "none";
        X.style.display = "block";
        ps1.style.display = "none";
        ps2.style.display = "none";
    }
}

//Afficher la fiche technique du joueur cliqué dans l'image de l'équipe
function f32(j){
    let J = document.getElementById("joueurs-maroc");
    let A = document.getElementById("joueur1");
    let B = document.getElementById("joueur2");
    switch (j.title) {
        case "Yassine Bounou":
            A.style.display = "block";
            B.style.display = "none";
            J.style.display = "none";
            break;
        case "Achraf Hakimi":
            A.style.display = "none";
            B.style.display = "block";
            J.style.display = "none";
            break;
        default:
            break;
    };
}

/*Volet 4*/

//Editer 
function f41(a){
    let T = document.getElementById("tab");
    let A = document.getElementById("joueur1");
    let B = document.getElementById("joueur2");
    var row = a.parentNode.parentNode; 
    switch (row.getElementsByTagName('td')[1].innerHTML) {
        case "Yassine Bounou":
            A.style.display = "block";
            B.style.display = "none";
            T.style.display = "none";
            break;
        case "Achraf Hakimi":
            A.style.display = "none";
            B.style.display = "block";
            T.style.display = "none";
            break;
        default:
            break;
    };
}

//Modifier
function f42(b){
    var row = b.parentNode.parentNode; 
    row.getElementsByTagName('td')[1].contentEditable = true;
    row.getElementsByTagName('td')[2].contentEditable = true;
    b.addEventListener("dblclick", () => {
        row.getElementsByTagName('td')[1].contentEditable = false;
        row.getElementsByTagName('td')[2].contentEditable = false;
    });
}

//Supprimer
function f43(c){
    var i = c.parentNode.parentNode.rowIndex;
    document.getElementById("tab").deleteRow(i);
}

//Afficher le formulaire d'ajout
function f44(){
    let form = document.getElementById("add");
    form.style.display="block";
}

//Ajouter
function f45(){
    let x = document.getElementById("image");
    let y = document.getElementById("nom");
    let z = document.getElementById("palmares");

    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    let img1 = document.createElement("img");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let but4 = document.createElement("button");
    let icon4 = document.createElement("i");
    let col5 = document.createElement("td");
    let but5 = document.createElement("button");
    let icon5 = document.createElement("i");
    let col6 = document.createElement("td");
    let but6 = document.createElement("button");
    let icon6 = document.createElement("i");

    const readUrl = event => {
        if(event.files && event.files[0]) {
            let reader = new FileReader();
            reader.onload = event => img1.src = event.target.result;
            reader.readAsDataURL(event.files[0])
        }
    }
      
    x.onchange = function() {
        readUrl(this);
    };

    col2.innerHTML = y.value;
    col3.innerHTML = z.value;

    col1.appendChild(img1);
    col4.appendChild(but4);
    col5.appendChild(but5);
    col6.appendChild(but6);
    but4.appendChild(icon4);
    but5.appendChild(icon5);
    but6.appendChild(icon6);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    row.appendChild(col6);

    col2.className = "col2";
    icon4.className = "fa fa-upload";
    icon5.className = "fa fa-edit";
    icon6.className = "fa fa-trash";
    row.className = "ligne";

    document.getElementById("tab").appendChild(row);

    but5.addEventListener("click", () => {
        col2.contentEditable = true;
        col3.contentEditable = true;
    });
    but5.addEventListener("dblclick", () => {
        col2.contentEditable = false;
        col3.contentEditable = false;
    });
    but6.addEventListener("click", () => {
        row.remove();
    });
}

//Retourner vers la table des joueurs
function f46(d){
    let T = document.getElementById("tab");
    let J = document.getElementById("joueurs-maroc");
    let F = d.parentNode;
    T.style.display = "block";
    J.style.display = "block";
    F.style.display = "none";
}

/*Affichage des page l'espace réservé initialement aux volet 2, 3 et 4*/

//Groupes
function fg(){
    let section1 = document.getElementById("v234");
    let section2 = document.getElementById("matchs");
    let section3 = document.getElementById("classement");
    let section4 = document.getElementById("details-actu");
    let section5 = document.getElementById("details-pub");
    section1.style.display = "inline-flex";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
}

//Matchs
function fm(){
    let section1 = document.getElementById("v234");
    let section2 = document.getElementById("matchs");
    let section3 = document.getElementById("classement");
    let section4 = document.getElementById("details-actu");
    let section5 = document.getElementById("details-pub");
    section1.style.display = "none";
    section2.style.display = "inline";
    section2.style.width = "72%";
    section2.style.paddingRight = "20px";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
}

//Classement
function fc(){
    let section1 = document.getElementById("v234");
    let section2 = document.getElementById("matchs");
    let section3 = document.getElementById("classement");
    let section4 = document.getElementById("details-actu");
    let section5 = document.getElementById("details-pub");
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "inline";
    section3.style.width = "72%";
    section3.style.paddingRight = "20px";
    section4.style.display = "none";
    section5.style.display = "none";
}

//Actualités
function fa(){
    let section1 = document.getElementById("v234");
    let section2 = document.getElementById("matchs");
    let section3 = document.getElementById("classement");
    let section4 = document.getElementById("details-actu");
    let section5 = document.getElementById("details-pub");
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "inline";
    section4.style.width = "72%";
    section4.style.paddingRight = "20px";
    section5.style.display = "none";
}

//Publicités
function fp(){
    let section1 = document.getElementById("v234");
    let section2 = document.getElementById("matchs");
    let section3 = document.getElementById("classement");
    let section4 = document.getElementById("details-actu");
    let section5 = document.getElementById("details-pub");
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "inline";
    section5.style.width = "72%";
    section5.style.paddingRight = "20px";
}

//Ajouter un match
function addm(phase){
    let x = phase.parentNode;
    let y = x.nextElementSibling;
    let z = document.createElement("div");
    z.innerHTML=`<div class="match">
                    <span>
                        <button class="icon-btn" onclick="f23(this)"><i class='fa fa-edit'></i></button>
                        <button class="icon-btn" onclick="f24(this)"><i class='fa fa-trash'></i></button>
                    </span>
                    <h3>Phase</h3>
                    <h4>Etat</h4>
                    <div class="match-content">
                        <div class="column">
                            <div class="team">
                                <div class="team-logo"><img src="./css/images/icon-match.jpg" /></div>
                            <p class="team-name">Equipe 1</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="match-details">
                            <div class="match-date">-- ------ ---- à <strong>--:--</strong></div>
                            <div class="match-score">
                                <span class="match-score-number">--</span>
                                <span class="match-score-divider">:</span>
                                <span class="match-score-number">--</span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="team">
                            <div class="team-logo"><img src="./css/images/icon-match.jpg" /></div>
                            <p class="team-name"> Equipe 2</p>
                        </div>
                    </div>
                </div>`;
    y.appendChild(z);
}