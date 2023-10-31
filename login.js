function validateForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["pass"].value;

    // Email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!email.match(emailPattern)) {
        alert("Invalid email format");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // If validation passes, navigate to "shoe.html"
    window.location.href = "./shoe.html";

    return true;
}