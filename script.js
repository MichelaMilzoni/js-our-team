//? Dato un array di oggetti rappresentante un team di un’azienda, 
//? creare una pagina dedicata in cui mostrare una card per ciascun componente.
//? (trovate l’array del team all’interno della cartella in allegato)

//? Bonus
//? Rendere l’esercizio responsive, mandando a capo le card
//? Aggiungere un form di agginta membri che permetta di visualizzare 
//? il nuovo membro sulla pagina (usate una foto qualunque, 
//? anche vostra se volete sentirvi parte del team! :sorridere:)


//TODO: DEFINISCO ARRAY DI OGGETTI
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//TODO: SELEZIONO IL CONTENITORE
const teamContainer = document.getElementById("team-container");
//* cerco elemento HTML tramite id e lo memorizzo in una variabile, così posso utilizzarlo

//TODO: CREAZIONE DINAMICA DELLA CARD
teamMembers.forEach(member => { 
  //! forEach. esegue il codice all'interno della arrow function PER OGNI oggetto dell'array 
  teamContainer.innerHTML +=
  //! +=        serve per AGGIUNGERE (append) nuove card al contenitore,
  //!           senza sovrascrivere il contenuto esistente
  //! dentro la stringa innerHTML, creo una card con le info del membro
  // ` <div class="card text-start" style="display: flex; flex-direction: row; align-items: center;">
  //     <img src="${member.img}" class="img-fluid" style="width: 100px; height: auto; margin-right: 10px;" alt="${member.name}">
  //     <div class="card-body ms-2">
  //       <h5 class="card-title">${member.name}</h5>
  //       <p class="card-subtitle mb-2 text-body-secondary">${member.role}</p>
  //       <a href="mailto:${member.email}">${member.email}</a>
  //     </div>
  //   </div>`;
  ` <div class="col-1-3">
      <div class="card text-start" style="display: flex; flex-direction: row; align-items: center;">
        <img src="${member.img}" class="img-fluid" style="width: auto; height: auto;" alt="${member.img}">
        <div class="card-body ms-2">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-subtitle mb-2 text-body-secondary">${member.role}</p>
          <a href="mailto:${member.email}">${member.email}</a>
        </div>
      </div>
    </div>
  `
}) 