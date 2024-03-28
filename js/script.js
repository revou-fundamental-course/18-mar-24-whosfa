document.getElementById("contact-form").addEventListener("submit" , function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name.trim() === "" || email.trim() === "") {
        alert("Username and email are required!");
    } else {
        alert("Form submitted successfully!");
    }
});