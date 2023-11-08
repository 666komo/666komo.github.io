document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform simple username and password validation
        if (username === "pwalker" && password === "skyline") {
            // Successful login
            window.location.href = "welcome.html";
        } else {
            // Invalid login
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
