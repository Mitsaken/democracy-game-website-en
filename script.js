// Object to hold all translations
const translations = {
    el: {
        pageTitle: "Democracy Game | Αλλάζουμε το Παιχνίδι",
        heroTitle: "Αλλάζουμε το Παιχνίδι στη Δημοκρατία.",
        heroSubtitle: "Το <strong>Democracy Game</strong> είναι ένα καινοτόμο εργαλείο διαλόγου που χρησιμοποιεί την τεχνολογία, την επιστήμη και το παιχνίδι για να δώσει φωνή στους νέους.",
        heroCta: "ΕΙΣΑΙ ΜΕΣΑ;",
        challengeTitle: "Η Πρόκληση της Σύγχρονης Δημοκρατίας",
        challengeText: "Οι νέοι σήμερα αντιμετωπίζουν εμπόδια που τους απομακρύνουν από την ενεργό συμμετοχή στα κοινά. Παράλληλα, η έξαρση των fake news απειλεί τα δικαιώματά μας. Η φωνή σου αξίζει να ακουστεί.",
        solutionTitle: "Η Λύση: Ένα Κοινωνικό Δίκτυο για Ενεργούς Πολίτες",
        feature1Title: "🔍 Έλεγχος Γεγονότων",
        feature1Text: "Μαθαίνουμε να ξεχωρίζουμε την αλήθεια από την παραπληροφόρηση. Κάθε επιχείρημα βασίζεται σε έγκυρα δεδομένα.",
        feature2Title: "🎮 Παιχνιδοποίηση",
        feature2Text: "Μετατρέπουμε τη σοβαρή συζήτηση σε μια ελκυστική και διαδραστική εμπειρία. Η συμμετοχή γίνεται παιχνίδι.",
        feature3Title: "🧠 Νευροεπιστημονική Ανάλυση",
        feature3Text: "Αξιοποιούμε την επιστήμη για να κατανοήσουμε και να βελτιώσουμε τον τρόπο που γίνεται ο δημόσιος διάλογος.",
        visionTitle: "Το Όραμά Μας",
        visionQuote: "\"Φιλοδοξούμε να κάνουμε τη συμμετοχή των πολιτών καθοριστικό παράγοντα για τη δημιουργία αλλαγής.\"",
        visionText: "Στόχος μας είναι να εντάξουμε τους νέους στη λήψη αποφάσεων και να ενδυναμώσουμε τη δημοκρατία στην πράξη.",
        teamTitle: "Η Ομάδα μας",
        teamMember1Name: "Δήμητρα Γιαννάκη",
        teamMember1Role: "Πολιτική Επιστήμονας",
        teamMember2Name: "Δρ. Κωνσταντίνος Καλαφατάκης",
        teamMember2Role: "Νευροεπιστήμονας",
        teamMember3Name: "Όλγα Δούρου",
        teamMember3Role: "Κοινωνιολόγος",
        teamMember4Name: "Δημήτριος Λαμπίρης",
        teamMember4Role: "Δημοσιογράφος",
        footerTitle: "Είσαι έτοιμος να αλλάξεις το παιχνίδι;",
        footerText: "Γίνε μέρος της κοινότητας του Democracy Game και βοήθησε να διαμορφώσουμε το μέλλον.",
        footerCta: "ΕΠΙΚΟΙΝΩΝΗΣΕ ΜΑΖΙ ΜΑΣ",
        footerNote: "&copy; 2025 Democracy Game. All rights reserved."
    },
    en: {
        pageTitle: "Democracy Game | Changing the Game",
        heroTitle: "Changing the Game in Democracy.",
        heroSubtitle: "<strong>Democracy Game</strong> is an innovative debate tool that uses technology, science, and gamification to give a voice to the youth.",
        heroCta: "ARE YOU IN?",
        challengeTitle: "The Challenge of Modern Democracy",
        challengeText: "Young people today face obstacles that distance them from active participation in public affairs. Meanwhile, the rise of fake news threatens our rights. Your voice deserves to be heard.",
        solutionTitle: "The Solution: A Social Network for Active Citizens",
        feature1Title: "🔍 Fact-Checking",
        feature1Text: "We learn to distinguish truth from misinformation. Every argument is based on valid data.",
        feature2Title: "🎮 Gamification",
        feature2Text: "We turn serious discussion into an engaging and interactive experience. Participation becomes a game.",
        feature3Title: "🧠 Neuroscientific Analysis",
        feature3Text: "We leverage science to understand and improve the way public discourse takes place.",
        visionTitle: "Our Vision",
        visionQuote: "\"We aspire to make citizen participation a decisive factor in creating change.\"",
        visionText: "Our goal is to include young people in decision-making and to strengthen democracy in practice.",
        teamTitle: "Our Team",
        teamMember1Name: "Dimitra Giannaki",
        teamMember1Role: "Political Scientist",
        teamMember2Name: "Dr. Konstantinos Kalafatakis",
        teamMember2Role: "Neuroscientist",
        teamMember3Name: "Olga Dourou",
        teamMember3Role: "Sociologist",
        teamMember4Name: "Dimitrios Lampiris",
        teamMember4Role: "Journalist",
        footerTitle: "Are you ready to change the game?",
        footerText: "Become part of the Democracy Game community and help shape the future.",
        footerCta: "CONTACT US",
        footerNote: "&copy; 2025 Democracy Game. All rights reserved."
    }
};

// Function to set the language
const setLanguage = (language) => {
    // Find all elements that have a 'data-key' attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
};

// Event Listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
    const langElButton = document.getElementById('lang-el');
    const langEnButton = document.getElementById('lang-en');

    langElButton.addEventListener('click', () => {
        setLanguage('el');
        langElButton.classList.add('active');
        langEnButton.classList.remove('active');
    });

    langEnButton.addEventListener('click', () => {
        setLanguage('en');
        langEnButton.classList.add('active');
        langElButton.classList.remove('active');
    });

    // Set default language on page load
    setLanguage('el');
});
