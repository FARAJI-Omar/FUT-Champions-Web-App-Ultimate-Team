const createPlayerBtn = document.getElementById("create-palyer-button");
const popup = document.getElementById("create-player-popup");
const closePopupBtn = document.getElementById("close-popup-btn");
const form = document.getElementById("create-player-form");
const positionOptions = document.querySelectorAll(".position-btn");
const generalStats = document.getElementById("general-stats");
const goalkeeperStats = document.getElementById("goalkeeper-stats");
const button433 = document.getElementById("433");
const button442 = document.getElementById("442");
const formation433 = document.getElementById("formation-433");
const formation442 = document.getElementById("formation-442");

let selectedPosition = null;

let playerId = 1; // To track the player ID for each new player
let players = []; // Array to store player data
let gks = []; // Array to store goalkeeper data

// Validation Functions
function validateName(name) {
    const nameRegex = /^[A-Za-z\s']+$/;
    return nameRegex.test(name.trim());
  }
  
  function validateStats(stats) {
    return stats.every(stat => Number.isInteger(stat) && stat >= 0 && stat <= 100);
  }
  

// Show popup and reset stats display
createPlayerBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  selectedPosition = null;
});

// Hide popup
closePopupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Handle position selection
positionOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const position = btn.dataset.position;

    // Deselect previous selection
    if (selectedPosition) {
      document.querySelector(`[data-position="${selectedPosition}"]`).style.backgroundColor = "";
    }

    // Update selection
    selectedPosition = position;
    btn.style.backgroundColor = "green";

    // Toggle stats visibility based on position
    if (position === "GK") {
      generalStats.style.display = "none"; 
      goalkeeperStats.style.display = "flex"; 
    } else {
      generalStats.style.display = "flex"; 
      goalkeeperStats.style.display = "none";
    }
  });
});



// Handle form submission
form.addEventListener("submit", (e) => {
    // Prevent form submission until data is processed
    e.preventDefault();

    // Get the values from the form inputs
  const lastName = document.getElementById("player-last-name").value;
  const firstName = document.getElementById("player-first-name").value;
  const nationality = document.getElementById("image-nationality").value;
  const club = document.getElementById("image-club").value;
  const photo = document.getElementById("image-url").value;

  if (!validateName(firstName) || !validateName(lastName)) {
    alert("First name and last name must contain only letters and spaces and '");
    return;
  }
    if (!selectedPosition) {
    alert("Please select a position.");
    return;
  }

  // let palyernames, photos, ratings, positions, nations, pacs, shos, pass, dris, defs, phys;
  
  // Stats for players (general stats or goalkeeper stats)
  let stats = [];
  let power = 0

  if (selectedPosition === "GK") {
    const div = parseInt(document.getElementById("div").value);
    const han = parseInt(document.getElementById("han").value);
    const kic = parseInt(document.getElementById("kic").value);
    const ref = parseInt(document.getElementById("ref").value);
    const spe = parseInt(document.getElementById("spe").value);
    const pos = parseInt(document.getElementById("pos").value);

    stats = [div, han, kic, ref, spe, pos];

    if (!validateStats(stats)) {
        alert("Stats must be between 0 and 100.");
        return;
      }

    power = Math.round((div + han + kic + ref + spe + pos) / 6);

    // const goalkeeper = {
    //     id: playerId,
    //     lastName: lastName,
    //     firstName: firstName,
    //     position: selectedPosition,
    //     nationality: nationality,
    //     photo: photo,
    //     power: power,
    //     stats: {DIV: div, HAN: han, KIC: kic, REF: ref, SPE: spe, POS: pos,}
    //   };
      
      
    // gks.push(goalkeeper);

    // Update the card with the gk player's data
    // document.getElementById("rating").textContent = power;
    // document.getElementById("position").textContent = "GK";
    // document.getElementById("photo").style.backgroundImage = `url(${photo})`;
    // document.getElementById("player-name").innerHTML = `<p>${firstName} ${lastName}</p>`;
    // document.getElementById("nation").style.backgroundImage = `url(${nationality})`;
    // document.getElementById("club").style.backgroundImage = `url(${club})`;


    

// Access the "powers" container
// const powersContainer = document.getElementById("powers");

// Update stats inside the "powers" container
// powersContainer.querySelector("#pac").textContent = `DIV\n${div}`;
// powersContainer.querySelector("#sho").textContent = `HAN\n${han}`;
// powersContainer.querySelector("#pas").textContent = `KIC\n${kic}`;
// powersContainer.querySelector("#dri").textContent = `REF\n${ref}`;
// powersContainer.querySelector("#def").textContent = `SPE\n${spe}`;
// powersContainer.querySelector("#phy").textContent = `POS\n${pos}`;



    } else {
        const pac = parseInt(document.getElementById("pac").value);
        const sho = parseInt(document.getElementById("sho").value);
        const pas = parseInt(document.getElementById("pas").value);
        const dri = parseInt(document.getElementById("dri").value);
        const def = parseInt(document.getElementById("def").value);
        const phy = parseInt(document.getElementById("phy").value);

    stats = [pac, sho, pas, dri, def, phy];

    if (!validateStats(stats)) {
        alert("Stats must be between 0 and 100.");
        return;
      }

    power = Math.round((pac + sho + pas + dri + def + phy) / 6);

    // // Push data into the players array
    // const player = {
    //     id: playerId,
    //     lastName: lastName,
    //     firstName: firstName,
    //     position: selectedPosition,
    //     nationality: nationality,
    //     photo: photo,
    //     power: power,
    //     stats: {PAC: pac, SHO: sho, PAS: pas, DRI: dri, DEF: def, PHY: phy,}
    //   };
    //   players.push(player);

         // Update the card with the player's data
    // document.getElementById("rating").textContent = power;
    // document.getElementById("position").textContent = selectedPosition;
    // document.getElementById("photo").style.backgroundImage = `url(${photo})`;
    // document.getElementById("player-name").innerHTML = `<p>${firstName} ${lastName}</p>`;
    // document.getElementById("nation").style.backgroundImage = `url(${nationality})`;
    // document.getElementById("club").style.backgroundImage = `url(${club})`;

// Access the "powers" container
// const powersContainer = document.getElementById("powers");

// Update stats inside the "powers" container
// powersContainer.querySelector("#pac").textContent = `PAC\n${pac}`;
// powersContainer.querySelector("#sho").textContent = `SHO\n${sho}`;
// powersContainer.querySelector("#pas").textContent = `PAS\n${pas}`;
// powersContainer.querySelector("#dri").textContent = `DRI\n${dri}`;
// powersContainer.querySelector("#def").textContent = `DEF\n${def}`;
// powersContainer.querySelector("#phy").textContent = `PHY\n${phy}`;
    }

  playerId++;

//  // Create the player box div

//  const playerBox = document.createElement("div");
//  playerBox.classList.add("player-box"); // Add a class for styling

//  // Add player data to the div
//  playerBox.innerHTML = `
//      <h3>${firstName} ${lastName}</h3>
//      <p>Position: ${selectedPosition}</p>
//      <p>Nationality: <img src="${nationality}" alt="Nationality" class="flag"></p>
//      <p>Club: <img src="${club}" alt="Club" class="club-logo"></p>
//      <p>Rating: ${power}</p>
//      <div class="player-stats">
//          <p><strong>Stats:</strong></p>
//          ${stats.map(stat => `<p>${stat}</p>`).join("")}
//      </div>
//      <div class="player-photo" style="background-image: url(${photo});"></div>
//  `;

//  // Find the target container where the player box should be added
//  const playersContainer = document.getElementById("card");
//  playersContainer.appendChild(playerBox);

// const card = document.getElementById('card');
// card.style.display = "flex";


// Access the existing "card" div to display the player data
const card = document.getElementById("card");
card.style.display = "flex"; // Ensure the card is displayed (in case it's hidden initially)

// Update the elements inside the card with the player data
// Rating and position
card.querySelector("#rating").textContent = power;
card.querySelector("#position").textContent = selectedPosition;

// Player name
card.querySelector("#player-name").textContent = firstNameName;

// Player photo
card.querySelector("#photo").style.backgroundImage = `url(${photo})`;

// Player nationality and club logos
card.querySelector("#nation").style.backgroundImage = `url(${nationality})`;
card.querySelector("#club").style.backgroundImage = `url(${club})`;

// Player stats
const powersContainer = card.querySelector("#powers");
powersContainer.querySelector("#pac").textContent = `PAC\n${pac}`;
powersContainer.querySelector("#sho").textContent = `SHO\n${sho}`;
powersContainer.querySelector("#pas").textContent = `PAS\n${pas}`;
powersContainer.querySelector("#dri").textContent = `DRI\n${dri}`;
powersContainer.querySelector("#def").textContent = `DEF\n${def}`;
powersContainer.querySelector("#phy").textContent = `PHY\n${phy}`;


alert("Player added successfully!");


// reset the form and selected position
form.reset();

// updateCard(newPlayer);
   
//   console.log("Players Array:", players);
//   console.log("Goalkeepers Array:", gks);


});
formation433.style.display = "none";
formation442.style.display = "none";

let selectedButton = null;

button433.addEventListener("click", () => {
  formation433.style.display = ""; 
  formation442.style.display = "none";
  updateButtonStyles(button433);
});

button442.addEventListener("click", () => {
  formation433.style.display = "none"; 
  formation442.style.display = "";   
  updateButtonStyles(button442);
});

function updateButtonStyles(selected) {
  if (selectedButton) {
    selectedButton.style.backgroundColor = "";
  }
  selected.style.backgroundColor = "green";
  selectedButton = selected;
};












  


  


