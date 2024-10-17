// Get DOM elements
const authForm = document.getElementById('auth-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registerLink = document.getElementById('register-link');

// Sample user data (for demonstration purposes only)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'admin', password: 'adminpass' }
];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log('Login successful:', { username });
            alert('Login successful!');
        } else {
            console.log('Login failed:', { username });
            alert('Invalid username or password.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

// Function to switch to registration mode
function switchToRegister(event) {
    event.preventDefault();
    const authContainer = document.querySelector('.auth-container');
    const formTitle = authContainer.querySelector('h2');
    const submitButton = authForm.querySelector('button[type="submit"]');
    const switchLink = document.getElementById('register-link');

    if (formTitle.textContent === 'Authentication') {
        formTitle.textContent = 'Registration';
        submitButton.textContent = 'Register';
        switchLink.textContent = 'Already have an account? Login';
    } else {
        formTitle.textContent = 'Authentication';
        submitButton.textContent = 'Login';
        switchLink.textContent = 'Don\'t have an account? Register';
    }
}

// Add event listeners
authForm.addEventListener('submit', handleSubmit);
registerLink.addEventListener('click', switchToRegister);
