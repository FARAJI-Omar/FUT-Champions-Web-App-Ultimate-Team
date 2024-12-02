const createPlayerBtn = document.getElementById("create-palyer-button");
const popup = document.getElementById("create-player-popup");
const closePopupBtn = document.getElementById("close-popup-btn");
const form = document.getElementById("create-player-form");
const positionOptions = document.querySelectorAll(".position-btn");
const generalStats = document.getElementById("general-stats");
const goalkeeperStats = document.getElementById("goalkeeper-stats");

let selectedPosition = null;

// Validation Functions
function validateName(name) {
    const nameRegex = /^[A-Za-z\s']+$/;
    return nameRegex.test(name.trim());
  }
  
  function validateStats(stats) {
    return stats.every(stat => Number.isInteger(stat) && stat > 0 && stat <= 100);
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
    e.preventDefault();

    // Get the values from the form inputs
  const lastName = document.getElementById("player-last-name").value.trim();
  const firstName = document.getElementById("player-first-name").value.trim();

  if (!validateName(firstName) || !validateName(lastName)) {
    alert("First name and last name must contain only letters and spaces and '");
    return;
  }
    if (!selectedPosition) {
    alert("Please select a position.");
    return;
  }
  
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
    power = Math.round((div + han + kic + ref + spe + pos) / 6);

    if (!validateStats(stats)) {
        alert("Stats must be between 1 and 100.");
        return;
      }
    } else {
        const pac = parseInt(document.getElementById("pac").value);
        const sho = parseInt(document.getElementById("sho").value);
        const pas = parseInt(document.getElementById("pas").value);
        const dri = parseInt(document.getElementById("dri").value);
        const def = parseInt(document.getElementById("def").value);
        const phy = parseInt(document.getElementById("phy").value);

    stats = [pac, sho, pas, dri, def, phy];
    power = Math.round((pac + sho + pas + dri + def + phy) / 6);

    if (!validateStats(stats)) {
        alert("Stats must be between 1 and 100.");
        return;
      }

    }
// Select the subs container
const cardContainer = document.getElementById("subs"); // Parent container for all cards

// Create a new player card dynamically
const photo = document.getElementById("image-url").value.trim();
const nationality = document.getElementById("image-nationality").value.trim();
const club = document.getElementById("image-club").value.trim();
const newCard = document.createElement("div");
newCard.classList.add("player-card");

newCard.innerHTML = `
    <div class="card-header">
        <span id="rating">${power}</span>
        <span id="position">${selectedPosition}</span>
    </div>
<div id="photo" class="photo">
    <img src="${photo}" alt="Player photo">
</div>
    <div id="player-name" class="player-name">${lastName}</div>
    <div id="club-nation">
        <div id="nation" class="nation">
          <img src="${nationality}" alt="Player photo">
        </div>
        <div id="club" class="club">
          <img src="${club}" alt="Player photo">
        </div>
    </div>
    <div id="powers" class="powers">
        ${selectedPosition === "GK" ? `
            <div id="pac1">DIV<br>${stats[0]}</div>
            <div id="sho1">HAN<br>${stats[1]}</div>
            <div id="pas1">KIC<br>${stats[2]}</div>
            <div id="dri1">REF<br>${stats[3]}</div>
            <div id="def1">SPE<br>${stats[4]}</div>
            <div id="phy1">POS<br>${stats[5]}</div>
        ` : `
            <div id="pac1">PAC<br>${stats[0]}</div>
            <div id="sho1">SHO<br>${stats[1]}</div>
            <div id="pas1">PAS<br>${stats[2]}</div>
            <div id="dri1">DRI<br>${stats[3]}</div>
            <div id="def1">DEF<br>${stats[4]}</div>
            <div id="phy1">PHY<br>${stats[5]}</div>
        `}
    </div>
`;
cardContainer.appendChild(newCard);
alert("Player added successfully!");
form.reset();
});

//formations

const button433 = document.getElementById("btn433");
const button442 = document.getElementById("btn442");
const formation = document.getElementById("formation");

// Initially hide the formation container
formation.style.display = "none";

// Add event listeners for buttons
button433.addEventListener("click", () => {
  // Set styles for the active button
  button433.style.backgroundColor = "green";
  button442.style.backgroundColor = ""; // Reset the other button's background

  // Display the formation container
  formation.style.display = "flex";
});

button442.addEventListener("click", () => {
  // Set styles for the active button
  button442.style.backgroundColor = "green";
  button433.style.backgroundColor = ""; // Reset the other button's background

  // Display the formation container
  formation.style.display = "flex";
});


// Select all elements with the class "position"
let positions = document.querySelectorAll('.position');

// Add event listener for 433 button
button433.addEventListener("click", () => {
  positions[0].style.top = "30%";
  positions[0].style.right = "56%";

  positions[1].style.top = "30%";
  positions[1].style.right = "63%";

  positions[2].style.top = "30%";
  positions[2].style.right = "70%";

  positions[3].style.top = "43%";
  positions[3].style.right = "56%";

  positions[5].style.top = "48%";
  positions[5].style.right = "63%";

  positions[4].style.top = "43%";
  positions[4].style.right = "70%";

  positions[6].style.top = "57%";
  positions[6].style.right = "75%";

  positions[7].style.top = "61%";
  positions[7].style.right = "68%";

  positions[8].style.top = "61%";
  positions[8].style.right = "59%";

  positions[9].style.top = "57%";
  positions[9].style.right = "52%";

  positions[10].style.top = "70%";
  positions[10].style.right = "63%";

});

// Add event listener for 442 button
button442.addEventListener("click", () => {
  positions[0].style.top = "30%";
  positions[0].style.right = "68%";

  positions[1].style.top = "30%";
  positions[1].style.right = "58%";

  positions[5].style.top = "48%";
  positions[5].style.right = "66%";

  positions[3].style.top = "48%";
  positions[3].style.right = "60%";

  positions[4].style.top = "42%";
  positions[4].style.right = "75%";
  positions[3].style.border = "blue solid";
  positions[2].style.border = "red solid";


  positions[2].style.top = "42%";
  positions[2].style.right = "50%";

  positions[6].style.top = "57%";
  positions[6].style.right = "75%";


  positions[7].style.top = "61%";
  positions[7].style.right = "68%";

  positions[8].style.top = "61%";
  positions[8].style.right = "59%";

  positions[9].style.top = "57%";
  positions[9].style.right = "52%";

  positions[10].style.top = "70%";
  positions[10].style.right = "63%";
});