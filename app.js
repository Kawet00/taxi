const translations = {
    fr: {
        description: "À votre service pour tous vos déplacements professionnels et personnels, navettes gares et aéroports.",
        call_me: "Appeler (+33 7 51 48 58 02)",
        email_me: "Envoyer un Email",
        whatsapp_me: "Réserver via WhatsApp",
        save_contact: "Enregistrer le contact"
    },
    en: {
        description: "At your service for all your professional and personal trips, station and airport transfers.",
        call_me: "Call (+33 7 51 48 58 02)",
        email_me: "Send an Email",
        whatsapp_me: "Book via WhatsApp",
        save_contact: "Save to Contacts"
    },
    es: {
        description: "A su servicio para todos sus viajes profesionales y personales, traslados a estaciones y aeropuertos.",
        call_me: "Llamar (+33 7 51 48 58 02)",
        email_me: "Enviar un Correo",
        whatsapp_me: "Reservar por WhatsApp",
        save_contact: "Guardar Contacto"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const saveContactBtn = document.getElementById('saveContact');

    // Language switcher
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Translate content
            const lang = btn.getAttribute('data-lang');
            
            // Set document language
            document.documentElement.lang = lang;

            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    // Slight animation for text change
                    el.style.opacity = 0;
                    setTimeout(() => {
                        el.textContent = translations[lang][key];
                        el.style.opacity = 1;
                    }, 200); // Wait for opacity to reach 0
                }
            });
        });
    });

    // Save contact (vCard generation)
    saveContactBtn.addEventListener('click', () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Taxi Sab
TITLE:Chauffeur de Taxi
TEL;TYPE=CELL:+33751485802
EMAIL:sabahtaxi@icloud.com
URL:https://wa.me/33751485802
END:VCARD`;

        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'taxi_sab.vcf';
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
});
