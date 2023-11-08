document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const passwordField = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("show-password");

    // Function to toggle password visibility
    showPasswordCheckbox.addEventListener("change", function () {
        togglePasswordVisibility();
    });

    function togglePasswordVisibility() {
        passwordField.type = showPasswordCheckbox.checked ? "text" : "password";
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = passwordField.value;

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
