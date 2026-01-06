const texteArea = document.getElementById("texte");
const status = document.getElementById("status");
const dateEl = document.getElementById("date");

// Afficher date & heure
function afficherDate() {
    const now = new Date();
    dateEl.textContent = now.toLocaleString("fr-FR", {
        dateStyle: "long",
        timeStyle: "short"
    });
}
setInterval(afficherDate, 1000);
afficherDate();

// Sauvegarde locale
function enregistrer() {
    localStorage.setItem("texte_principal", texteArea.value);
    localStorage.setItem("date_sauvegarde", new Date().toLocaleString("fr-FR"));
    status.textContent = "✅ Texte enregistré localement";
}

// Charger texte
function charger() {
    const texte = localStorage.getItem("texte_principal");
    const date = localStorage.getItem("date_sauvegarde");

    if (texte) {
        texteArea.value = texte;
        status.textContent = "📂 Chargé (sauvegardé le " + date + ")";
    } else {
        status.textContent = "❌ Aucun texte trouvé";
    }
}

// Effacer
function effacer() {
    localStorage.clear();
    texteArea.value = "";
    status.textContent = "🗑 Texte supprimé";
}
