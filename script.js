// Message de bienvenue dans la console
console.log("Bienvenue au Festival Zenitude 2026");

// Fonction pour gérer la soumission du formulaire de contact
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert("Votre message a été envoyé !"); // Alerte de confirmation
});
