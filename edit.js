//edit
const editBtn = document.createElement('button'); 
editBtn.textContent = 'Edit';                    
editBtn.classList.add('edit-btn');      

// Add event listener for edit functionality
editBtn.addEventListener('click', function () {
    const editBox = document.createElement('div');
    editBox.classList.add('ebitbox');




   editBtn.appendChild('editBox')
});

// Append the edit button to the newCard
newCard.appendChild(editBtn);
