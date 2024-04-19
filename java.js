function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var errorMessages = [];

    if (name === "") {
        errorMessages.push("Please enter your name.");
    }
    if (email === "") {
        errorMessages.push("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }
    if (message === "") {
        errorMessages.push("Please enter your message.");
    }

    if (errorMessages.length > 0) {
        // Assume there's a div with id="errorMessages" in your HTML to show the errors
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
        return false;
    }

    // Clear any previous error messages if the form is valid
    document.getElementById('errorMessages').innerHTML = '';
    return true;
}
const sections = document.querySelectorAll('.section');

// Function to handle section switching
function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.background section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
// Get the current page URL
var currentPageUrl = window.location.href;

// Select all navigation links
var navLinks = document.querySelectorAll('.navcontainer a, .sidenavcontainer a');

// Loop through each navigation link
navLinks.forEach(function(link) {
    // Check if the link's href matches the current page URL
    if (link.href === currentPageUrl) {
        // Add a class to the link to grey it out
        link.classList.add('active-link');
    }
});
