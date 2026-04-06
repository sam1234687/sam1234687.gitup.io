// Smooth scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Contact form message
function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("formMessage").innerText = "Message sent successfully!";
}
