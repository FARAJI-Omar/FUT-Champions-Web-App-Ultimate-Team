// Create the Edit button
const editBtn = document.createElement('button'); 
editBtn.innerHTML = `<img src="images/edit.png" alt="Edit">`;                    
editBtn.classList.add('editbtn');      

editBtn.addEventListener('click', () => {
    // Check if an editBox already exists
    const existEditBox = newCard.querySelectorAll('.editbox');
    if (existEditBox.length === 0) { 
        // Create the editBox
        const editBox = document.createElement('div');
        editBox.classList.add('editbox');

        // Add some placeholder text to the editBox
        editBox.textContent = "ediiiiiiitttt";
        let name = document.createElement("input","type='text'");
        editBox.appendChild(name);


        editBox.appendChild()

        let newlastName 
        let newfirstName
        let newnationality
        let newclub
        let newphy
        let newdef
        let newdri
        let newpas
        let newsho
        let newpac
        





        // Create the Cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-btn');
        
        // Create the Confirm button
        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.classList.add('confirm-btn');
        
        // Append buttons to editBox
        editBox.appendChild(cancelBtn);
        editBox.appendChild(confirmBtn);

        // Append the editBox to the newCard
        newCard.appendChild(editBox);

        // Cancel button functionality: Close the editBox
        cancelBtn.addEventListener('click', () => {
            newCard.removeChild(editBox); // Remove the editBox from the newCard
        });

        // Confirm button functionality: Close the editBox and display a message
        confirmBtn.addEventListener('click', () => {
            alert("Changes saved"); // Show "Changes saved" message
            newCard.removeChild(editBox); // Remove the editBox from the newCard
        });
    }
});

// Append the edit button to the newCard
newCard.appendChild(editBtn);

