// === ЯЗЫК ===
const translations = {
  ru: {
    services: "Услуги",
    portfolio: "Проекты",
    about: "Обо мне",
    contact: "Контакты",

    hero_title: "Эстетика.<br>Точность.<br>Печать.",
    hero_text: "Графический дизайн и сопровождение печати в Швейцарии.",
    hero_btn: "НАЧАТЬ ПРОЕКТ",

    services_title: "Что я предлагаю",

    s1_title: "БРЕНДИНГ И ДИЗАЙН",
    s1_text: "Логотипы, фирменный стиль и печатная продукция",

    s2_title: "ОБРАБОТКА ФОТО",
    s2_text: "Ретушь и визуальный контент",

    s3_title: "ПЕЧАТЬ",
    s3_text: "Контроль качества печати",

    country: "Швейцария",
    impressum: "Правовая информация",
    privacy: "Политика конфиденциальности"
  },

  de: {
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    about: "Über mich",
    contact: "Kontakt",

    hero_title: "Ästhetik.<br>Präzision.<br>Druckkunst.",
    hero_text: "Grafikdesign und Print Management in der Schweiz.",
    hero_btn: "PROJEKT STARTEN",

    services_title: "Was ich anbiete",

    s1_title: "BRANDING & DESIGN",
    s1_text: "Logos und Markenidentität",

    s2_title: "FOTOBEARBEITUNG",
    s2_text: "Professionelle Retusche",

    s3_title: "PRINT MANAGEMENT",
    s3_text: "Qualitätskontrolle",

    country: "Schweiz",
    impressum: "Impressum",
    privacy: "Datenschutz"
  },

  en: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",

    hero_title: "Aesthetics.<br>Precision.<br>Print.",
    hero_text: "Design and print management in Switzerland.",
    hero_btn: "START PROJECT",

    services_title: "What I offer",

    s1_title: "BRANDING & DESIGN",
    s1_text: "Logos and identity",

    s2_title: "PHOTO EDITING",
    s2_text: "Professional retouching",

    s3_title: "PRINT MANAGEMENT",
    s3_text: "Quality control",

    country: "Switzerland",
    impressum: "Legal notice",
    privacy: "Privacy policy"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  // активная кнопка
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelector(`[onclick="setLang('${lang}')"]`).classList.add("active");
}

// === СКРОЛЛ АНИМАЦИИ ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".service, .portfolio img").forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});

// === ЗАГРУЗКА ===
const savedLang = localStorage.getItem("lang") || "de";
setLang(savedLang);
