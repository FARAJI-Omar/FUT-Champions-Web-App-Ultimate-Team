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
    return stats.every(stat => Number.isInteger(stat) && stat > 0 && stat < 100);
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
  const nationality = document.getElementById("player-nationality").value;
  const photo = document.getElementById("image-url").value;

  if (!validateName(firstName) || !validateName(lastName) || !validateName(nationality)) {
    alert("First name, last name, and nationality must contain only letters and spaces and '");
    return;
  }

  // Stats for players (general stats or goalkeeper stats)
  let stats = [];
  let gkpower = 0

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

    const power = Math.round((div + han + kic + ref + spe + pos) / 6);

    const goalkeeper = {
        id: playerId,
        lastName: lastName,
        firstName: firstName,
        position: selectedPosition,
        nationality: nationality,
        photo: photo,
        power: power,
        stats: {DIV: div, HAN: han, KIC: kic, REF: ref, SPE: spe, POS: pos,}
      };
      
    gks.push(goalkeeper);

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

    const power = Math.round((pac + sho + pas + dri + def + phy) / 6);

    // Push data into the players array
    const player = {
        id: playerId,
        lastName: lastName,
        firstName: firstName,
        position: selectedPosition,
        nationality: nationality,
        photo: photo,
        power: power,
        stats: {PAC: pac, SHO: sho, PAS: pas, DRI: dri, DEF: def, PHY: phy,}
      };
      players.push(player);
    }
    

  playerId++;

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







  


  


