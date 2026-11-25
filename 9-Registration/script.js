
// Email Validation
function validEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Password Validation
function validPassword(password) {
    return password.length >= 8 &&
           /[A-Za-z]/.test(password) &&
           /[0-9]/.test(password);
}


// Registration Form
document.getElementById("registerForm").onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("regEmailError").innerHTML = "";
    document.getElementById("regPasswordError").innerHTML = "";

    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    if (email.trim() === "") {
        document.getElementById("regEmailError").innerHTML = "Email is required";
        valid = false;
    }
    else if (!validEmail(email)) {
        document.getElementById("regEmailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    if (password === "") {
        document.getElementById("regPasswordError").innerHTML = "Password is required";
        valid = false;
    }
    else if (!validPassword(password)) {
        document.getElementById("regPasswordError").innerHTML =
            "Password must have 8 characters, a letter and a number";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }

};


// Login Form
document.getElementById("loginForm").onsubmit = function(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let valid = true;

    document.getElementById("loginEmailError").innerHTML = "";
    document.getElementById("loginPasswordError").innerHTML = "";

    if (email.trim() === "") {
        document.getElementById("loginEmailError").innerHTML = "Email is required";
        valid = false;
    }
    else if (!validEmail(email)) {
        document.getElementById("loginEmailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    if (password === "") {
        document.getElementById("loginPasswordError").innerHTML = "Password is required";
        valid = false;
    }

    if (valid) {
        alert("Login Successful!");
    }

};
