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

let container = document.getElementById("container")
container.innerHTML += `<div class="fullWidth padding textCenter"><strong>OUR TEAM</strong></div> <div class="textCenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</div> `
const team = [
    { memberName: "Wayne Barnett" , role: "Founder" , personalImage: "wayne-barnett-founder-ceo.jpg" },
    { memberName: "Angela Caroll" , role: "Chief Editor" , personalImage: "angela-caroll-chief-editor.jpg" },
    { memberName: "Walter Gordon" , role: "Office Manager" , personalImage: "walter-gordon-office-manager.jpg" },
    { memberName: "Angela Lopez" , role: "Social Media Manager" , personalImage: "angela-lopez-social-media-manager.jpg" },
    { memberName: "Scott Estrada" , role: "Developer" , personalImage: "scott-estrada-developer.jpg" },
    { memberName: "Barbara Ramos" , role: "Graphic Designer" , personalImage: "barbara-ramos-graphic-designer.jpg" },
]
for (i=0; i<team.length; i++) {
    const currentTeam = team[i]
    console.log( ` ${currentTeam.memberName} ${currentTeam.role} ${currentTeam.personalImage} `  )
    container.innerHTML += ` <div class="radius card white"><div class="padding"> </div>${currentTeam.role}<div class="padding"><strong>${currentTeam.memberName}</strong></div> <div><img src="img/${currentTeam.personalImage}"alt="1" <div> </div> `
}

