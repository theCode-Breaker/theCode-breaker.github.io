const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Toggle theme between light and dark
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Change the button icon
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = '☀️'; // Change to sun icon for dark mode
    } else {
        themeToggleButton.textContent = '🌙'; // Change to moon icon for light mode
    }
});

// Save theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggleButton.textContent = '☀️';
} else {
    themeToggleButton.textContent = '🌙';
}

// Update theme preference in localStorage when toggled
themeToggleButton.addEventListener('click', () => {
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
