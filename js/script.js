// Мобильное меню
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Отправка формы через mailto
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    window.location.href = `mailto:hello@alexdesign.com?subject=New Inquiry&body=Имя: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
});
<script>
const translations = {
  de: {
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    about: "Über mich",
    contact: "Kontakt",

    hero_title: "Ästhetik.\nPräzision.\nDruckkunst.",
    hero_text: "Grafikdesign und professionelles Print Management in der Schweiz.",
    hero_btn: "PROJEKT STARTEN",

    services_title: "Was ich anbiete",

    s1_title: "BRANDING & DESIGN",
    s1_text: "Erstellung von Logos und Markenidentität",

    s2_title: "FOTOBEARBEITUNG",
    s2_text: "Professionelle Retusche und Farbkorrektur",

    s3_title: "PRINT MANAGEMENT",
    s3_text: "Druck und Qualitätskontrolle"
  },

  en: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",

    hero_title: "Aesthetics.\nPrecision.\nPrint.",
    hero_text: "Graphic design and professional print management in Switzerland.",
    hero_btn: "START PROJECT",

    services_title: "What I offer",

    s1_title: "BRANDING & DESIGN",
    s1_text: "Logos and brand identity",

    s2_title: "PHOTO EDITING",
    s2_text: "Professional retouching",

    s3_title: "PRINT MANAGEMENT",
    s3_text: "Print and quality control"
  },

  ru: {
    services: "Услуги",
    portfolio: "Портфолио",
    about: "Обо мне",
    contact: "Контакты",

    hero_title: "Эстетика.\nТочность.\nПечать.",
    hero_text: "Графический дизайн и сопровождение печати в Швейцарии.",
    hero_btn: "НАЧАТЬ ПРОЕКТ",

    services_title: "Что я предлагаю",

    s1_title: "БРЕНДИНГ И ДИЗАЙН",
    s1_text: "Логотипы и фирменный стиль",

    s2_title: "ОБРАБОТКА ФОТО",
    s2_text: "Ретушь и цветокоррекция",

    s3_title: "ПЕЧАТЬ",
    s3_text: "Контроль качества печати"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

// при загрузке
const savedLang = localStorage.getItem("lang") || "de";
setLang(savedLang);
</script>
