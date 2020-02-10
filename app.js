// Initialize GitHub class
const github = new Github;

// Initialize UI class
const ui = new UI;

const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show alert

            } else {
                // Show profile
                ui.showProfile(data.profile);

            }
        })
    } else {
        // Clear profile

    }
});