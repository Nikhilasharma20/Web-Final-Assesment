// script.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Form is valid, submit form or perform other actions here
    alert("Form submitted successfully!");
});

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
