document.addEventListener('DOMContentLoaded', function () {

    const translations = {
        fr: {
            title: "Faire une transaction",
            description: "Veuillez entrer les détails de la transaction ci-dessous :",
            "amount-label": "Montant :",
            "submit-button": "Envoyer",
            flag: "https://flagcdn.com/w40/fr.png",
            name: "Français"
        },
        en: {
            title: "Make a transaction",
            description: "Please enter the transaction details below:",
            "amount-label": "Amount:",
            "submit-button": "Submit",
            flag: "https://flagcdn.com/w40/gb.png",
            name: "English"
        }
    };

    // Anglais par défaut
    let currentLang = localStorage.getItem("selectedLang") || "en";
    updateLanguage(currentLang);

    document.getElementById("language-btn").addEventListener("click", () => {
        document.getElementById("language-menu").classList.toggle("hidden");
    });

    document.querySelectorAll("#language-menu li").forEach((li) => {
        li.addEventListener("click", () => {
            const lang = li.getAttribute("data-lang");
            currentLang = lang;
            localStorage.setItem("selectedLang", lang);
            updateLanguage(lang);
            document.getElementById("language-menu").classList.add("hidden");
        });
    });

    function updateLanguage(lang) {
        const trans = translations[lang];
        for (const key in trans) {
            if (document.getElementById(key)) {
                document.getElementById(key).innerText = trans[key];
            }
        }

        document.getElementById("language-flag").src = trans.flag;
        document.getElementById("language-name").innerText = "";
        document.documentElement.lang = lang;
    }
})