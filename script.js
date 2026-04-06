function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
    } else {
        alert("Message sent successfully!");
    }
}
