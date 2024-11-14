const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Toggle the button symbol between moon and sun
    if (body.classList.contains("dark")) {
        toggleButton.innerHTML = "🌞";
    } else {
        toggleButton.innerHTML = "🌙";
    }
});
