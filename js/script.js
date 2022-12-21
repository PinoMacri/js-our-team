/*
//*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
//*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto
*/
let prova = document.getElementById("prova")

//---------------------------------------------------------------------------------------------------

const team = [
    { memberName: "Wayne Barnett" , role: "Founder" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Angela Caroll" , role: "Chief Editor" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Walter Gordon" , role: "Office Manager" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Angela Lopez" , role: "Social Media Manager" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Scott Estrada" , role: "Developer" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Barbara Ramos" , role: "Graphic Designer" , personalImage: "wayne-barnett-founder-ceo.jpg" },
]

const role = (team[0]["role"]);
const personalImage = (team[0]["personalImage"]);


for (i=0; i<=team.length; i++) {
    const currentTeam = team[i]
     
    console.log( ` ${currentTeam.memberName} ${currentTeam.role} ${currentTeam.personalImage} `  )
    prova.innerText = ` ${currentTeam.memberName} ${currentTeam.role} ${currentTeam.personalImage} ` 
   
   
}
