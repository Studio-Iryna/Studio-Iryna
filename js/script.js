// Мобильное меню
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Переводы
const translations = {
  de: {
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    about: "Über mich",
    contact: "Kontakt"
  },
  en: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact"
  },
  ru: {
    services: "Услуги",
    portfolio: "Проекты",
    about: "Обо мне",
    contact: "Контакты"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

// загрузка языка
const savedLang = localStorage.getItem("lang") || "ru";
setLang(savedLang);
