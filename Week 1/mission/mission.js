// Select the theme selector element
const themeSelector = document.querySelector('#theme-selector');

// Function to change the theme
function changeTheme() {
    // Check to see what the current value of our select is
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('.logo');

    // If the value is dark then:
    if (selectedTheme === 'dark') {
        // Add the dark class to the body
        body.classList.add('dark');
        // Change the source of the logo img to point to the white logo
        logo.src = 'byui-logo_white.png';
    } else {
        // Otherwise, remove the dark class
        body.classList.remove('dark');
        // Make sure the logo src is the blue logo
        logo.src = 'byui-logo_blue.webp';
    }
}

// Add an event listener to the themeSelector element
// Use the changeTheme function as the event handler function
themeSelector.addEventListener('change', changeTheme);
