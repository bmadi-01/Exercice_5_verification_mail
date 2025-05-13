
function verifierEmail() {
    const email = document.getElementById("mon-email").value;
    const message = document.getElementById("message");

    // Vérifie s'il y a un "@" et un "." après
    if (email.includes("@")) {
        const parties = email.split("@");
        if (parties.length === 2 && parties[1].includes(".")) {
            message.textContent = "Adresse e-mail valide.";
            message.style.color = "green";
            return;
        }
    }

    message.textContent = " Adresse e-mail invalide. Il faut un '@' et un '.' après.";
    message.style.color = "red";
}

