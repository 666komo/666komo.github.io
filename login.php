<?php
session_start();

// Define the correct username and password
$correct_username = "pwalker";
$correct_password = "skyline";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $correct_username && $password === $correct_password) {
        // Successful login
        $_SESSION["username"] = $username;
        header("Location: https://www.seznam.cz"); // Redirect to seznam.cz
        exit;
    } else {
        // Failed login
        header("Location: index.html"); // Redirect back to the login screen
        exit;
    }
}
?>