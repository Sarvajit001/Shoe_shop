function myFunction() {
    var name = document.forms["signupForm"]["name"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["pass"].value;
    var confirmPassword = document.forms["signupForm"]["confirmPass"].value;

    // Email validation (simple format check)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please confirm your password.");
        return false;
    }

    // If validation passes, navigate to "login.html"
    window.location.href = "./login.html";

    return true;
}