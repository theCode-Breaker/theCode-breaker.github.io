const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Change button icon based on theme
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = '🌙'; // Dark theme, show moon icon
    } else {
        themeToggleButton.textContent = '☀️'; // Light theme, show sun icon
    }
});

// Save theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggleButton.textContent = '🌙';
} else {
    themeToggleButton.textContent = '☀️';
}

// Save preference when theme is toggled
themeToggleButton.addEventListener('click', () => {
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
